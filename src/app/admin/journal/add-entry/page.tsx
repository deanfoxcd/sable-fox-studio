'use client';

import ReactMarkdown from 'react-markdown';
import { addEntry } from '@/app/_lib/journalActions';
import { customTheme } from '@/app/styles/themes';
import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const AddEntry: React.FC = function () {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [value, setValue] = useState('');

  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const journalEntry = { title, content };
    console.log(journalEntry);
    await addEntry(journalEntry);
    setTitle('');
    setContent('');
    // redirect('/admin/journal');
  };

  return (
    <>
      <div className='text-white w-200 m-50'></div>
    </>
  );
};

export default AddEntry;
