'use client';

import { Button } from 'flowbite-react';
import { customTheme } from '../styles/themes';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactForm: React.FC = function () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
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
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
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
    <div className='flex flex-col md:flex-row gap-8 !bg-[#868469] pt-8'>
      <div className='md:w-1/2 flex flex-col items-center justify-center text-white px-20 py-6'>
        <p className='py-2'>
          I’m so excited to work with you! If you have any questions about the
          process please feel free to contact me by email or through the contact
          form to the right.
        </p>
        <a
          className='py-2 text-blue-100 hover:text-blue-200 underline underline-offset-2'
          href='mailto:sablefoxstudio@gmail.com'
        >
          sablefoxstudio@gmail.com
        </a>
        <p className='py-2'>
          You can also contact me here to check on orders, send photo
          references, availability for a consultation to discuss details,
          shipping information, and more.
        </p>
        <Image
          src='/images/contact.jpg'
          alt='contact form'
          width='500'
          height='20'
          className='py-4'
        />
      </div>

      <div className='md:w-1/2'>
        <section className='bg-transparent text-white'>
          <div className=' pb-16 px-4 mx-auto max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center '>
              Contact Me
            </h2>
            <form
              action='#'
              onSubmit={handleSubmit}
              className='space-y-8'
            >
              <div className='flex gap-4'>
                <div className='flex-1'>
                  <label
                    htmlFor='firstName'
                    className='block mb-2 text-lg font-medium'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder=''
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label
                    htmlFor='lastName'
                    className='block mb-2 text-lg font-medium'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder=''
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-lg font-medium'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block mb-2 text-lg font-medium'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='For example: Commissions, Originals, other'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-lg font-medium'
                >
                  Your message
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows={6}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Let me know how I can help you or what service you are looking for.'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <Button
                theme={customTheme.button}
                color='alternative'
                pill
                type='submit'
              >
                {isSubmitting ? 'Sending message' : 'Send Message'}
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
