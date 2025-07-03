'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contactPage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        router.push('/');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-4 space-y-4'
    >
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium'
        >
          Name
        </label>
        <input
          id='name'
          name='name'
          type='text'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full p-2 border rounded-md'
        />
      </div>
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium'
        >
          Email
        </label>
        <input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full p-2 border rounded-md'
        />
      </div>
      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          className='w-full p-2 border rounded-md'
        />
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
