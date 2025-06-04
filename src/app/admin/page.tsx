import { Button } from 'flowbite-react';
import { customTheme } from '../styles/themes';

const Admin: React.FC = function () {
  const inputStyle =
    'bg-white text-black p-3 border-1 border-[var(--main-brown)] rounded-lg focus:border-2 focus:border-[var(--main-brown)] focus:ring-1 focus:ring-[var(--main-brown)] outline-none';

  return (
    <div>
      <section className='!bg-transparent min-h-screen'>
        <div className='flex flex-1 items-center justify-center px-6 py-8 lg:py-0'>
          <div className='w-full rounded-lg md:mt-20 sm:max-w-md xl:p-0 '>
            <div className='p-4 pt-0'>
              <form
                className='space-y-4 md:space-y-6'
                action='#'
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-xl font-medium text-white dark:text-white'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className={[inputStyle, 'w-full'].join(' ')}
                    placeholder='Email Address'
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-xl font-medium text-white dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    className={[inputStyle, 'w-full'].join(' ')}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <a
                    href='#'
                    className='text-sm font-medium text-white hover:underline dark:text-white'
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  theme={customTheme.button}
                  color='alternative'
                  pill
                  className='w-full !text-llg'
                >
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
