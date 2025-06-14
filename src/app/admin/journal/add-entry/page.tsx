'use client';

import { addEntry } from '@/app/_lib/journalActions';
import { customTheme } from '@/app/styles/themes';
import { Button } from 'flowbite-react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const AddEntry: React.FC = function () {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
    <div>
      <form
        className='max-w-sm mx-auto'
        onSubmit={handleSubmit}
      >
        <div className='mb-5'>
          <label
            htmlFor='title'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='content'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Content
          </label>
          <input
            type='text'
            name='content'
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>

        <Button
          theme={customTheme.button}
          pill
          color='alternative'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddEntry;
