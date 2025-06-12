import { Button } from 'flowbite-react';
import { customTheme } from '../styles/themes';
import Image from 'next/image';

const ContactForm: React.FC = function () {
  return (
    <div className='flex flex-col md:flex-row gap-8 !bg-[#868469] pt-4'>
      <div className='md:w-1/2 flex flex-col items-center justify-center text-white px-20'>
        <p className='py-2'>
          I’m so excited to work with you! If you have any questions about the
          process please feel free to contact me by email or through the contact
          form to the right.
        </p>
        <p className='py-2'>sablefoxstudio@gmail.com</p>
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
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder=''
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
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                    placeholder=''
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
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@email.com'
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
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='For example: Commissions, Originals, other'
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
                  id='message'
                  rows={6}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Let me know how I can help you or what service you are looking for.'
                ></textarea>
              </div>
              <Button
                theme={customTheme.button}
                color='alternative'
                pill
              >
                Send message
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
