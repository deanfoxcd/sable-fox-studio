'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Welcome to Tiptap</p>',
  });

  return (
    <>
      {editor && (
        <EditorContent
          editor={editor}
          slot={
            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
              >
                bold
              </button>
            </div>
          }
        />
      )}
    </>
  );
};

export default Tiptap;
