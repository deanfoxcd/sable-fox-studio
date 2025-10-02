'use client';

import { Button } from 'flowbite-react';
import { useFormStatus } from 'react-dom';

import { customTheme } from '../styles/themes';
import { save } from '../_lib/newsletterActions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      theme={customTheme.button}
      color='alternative'
      pill
      disabled={pending}
      type='submit'
    >
      Join the club
    </Button>
  );
}

const inputStyle =
  'bg-white text-black p-3 border-1 border-[var(--main-brown)] rounded-lg focus:border-2 focus:border-[var(--main-brown)] focus:ring-1 focus:ring-[var(--main-brown)] outline-none';

const Newsletter: React.FC = function () {
  return (
    <section className='bg-transparent text-white mb-20'>
      <div className='mx-auto max-w-screen-xl lg:py-8 lg:px-2'>
        <div className='mx-4 sm:mx-auto max-w-screen-md sm:text-center'>
          <h2 className='mb-6 text-3xl tracking-tight font-extrabold sm:text-4xl '>
            Join the studio newsletter
          </h2>
          <p className='mx-auto mb-2 max-w-2xl font-light md:mb-4 sm:text-xl '>
            Be the first to know when a collection is launched, be notified when
            a spot opens up on the commissions waiting list, and learn more
            about the behind the scenes in the studio!
          </p>
          <form action={save}>
            <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex-col sm:space-y-0'>
              <div className='flex gap-4 p-4'>
                <label
                  htmlFor='firstName'
                  className='hidden'
                >
                  First Name
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  placeholder='First Name'
                  className={[inputStyle, 'w-full'].join(' ')}
                />
                <label
                  htmlFor='lastName'
                  className='hidden'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  placeholder='Last Name'
                  className={[inputStyle, 'w-full'].join(' ')}
                />
              </div>
              <div className='relative w-full flex justify-center'>
                <label
                  htmlFor='email'
                  className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Email address
                </label>

                <input
                  className={[inputStyle, 'max-w-xs w-full mx-auto'].join(' ')}
                  placeholder='Email address'
                  type='email'
                  name='email'
                  id='email'
                  required
                />
              </div>
              <div className='flex justify-center items-center mt-4'>
                <SubmitButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
