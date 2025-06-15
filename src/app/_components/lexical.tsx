'use client';

import React from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  type EditorState,
} from 'lexical';
import { $patchStyleText } from '@lexical/selection';
import { $generateHtmlFromNodes } from '@lexical/html';

const theme = {
  // Customize your theme here if desired
};

function Placeholder() {
  return <div className='editor-placeholder'>Enter some text...</div>;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  error?: Error;
  onError: (error: Error) => void;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { error: Error | null }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    this.props.onError(_error);
  }

  render() {
    if (this.state.error) {
      return (
        <div className='editor-error'>Error: {this.state.error.message}</div>
      );
    }
    return this.props.children;
  }
}

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fontSize = e.target.value;
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { fontSize });
      }
    });
  };

  return (
    <div style={{ marginBottom: 8, display: 'flex', gap: 8 }}>
      <button
        type='button'
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
      >
        Bold
      </button>
      <button
        type='button'
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
      >
        Italic
      </button>
      <select
        defaultValue=''
        onChange={handleFontSizeChange}
        style={{ minWidth: 60 }}
      >
        <option value=''>Font Size</option>
        <option value='12px'>12</option>
        <option value='14px'>14</option>
        <option value='16px'>16</option>
        <option value='18px'>18</option>
        <option value='24px'>24</option>
        <option value='32px'>32</option>
        <option value='48px'>48</option>
      </select>
    </div>
  );
}

export default function Editor({
  onChange,
  onSubmit,
}: {
  onChange?: (_editorState: EditorState) => void;
  onSubmit?: (html: string) => void;
}) {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError(error: Error) {
      throw error;
    },
  };

  // SubmitPlugin: handles submit button and HTML export
  function SubmitPlugin({ onSubmit }: { onSubmit?: (html: string) => void }) {
    const [editor] = useLexicalComposerContext();
    const handleSubmit = () => {
      if (!onSubmit) return;
      editor.getEditorState().read(() => {
        const html = $generateHtmlFromNodes(editor, null);
        onSubmit(html);
      });
    };
    return (
      <button
        type='button'
        onClick={handleSubmit}
        style={{ marginTop: 12 }}
      >
        Submit
      </button>
    );
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div
        className='editor-container'
        style={{ border: '1px solid #ccc', borderRadius: 6, padding: 10 }}
      >
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className='editor-input'
              style={{ minHeight: 120, outline: 'none' }}
            />
          }
          placeholder={<Placeholder />}
          ErrorBoundary={(props) => (
            <ErrorBoundary
              {...props}
              onError={() => {}}
            />
          )}
        />
        <HistoryPlugin />
        {onChange && <OnChangePlugin onChange={onChange} />}
        <SubmitPlugin onSubmit={onSubmit} />
      </div>
    </LexicalComposer>
  );
}
