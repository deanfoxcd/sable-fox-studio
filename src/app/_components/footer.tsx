'use client';

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterIcon,
} from 'flowbite-react';
import Link from 'next/link';
import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsPinterest,
} from 'react-icons/bs';

export const FooterComponent: React.FC = function () {
  return (
    <Footer>
      <div className='w-full bg-[#E5E0DA]'>
        <div className='grid w-full justify-center sm:flex sm:justify-center md:flex md:grid-cols-1'>
          <div>
            <Link
              href='/login'
              className='hover:cursor-default'
            >
              <FooterBrand
                // href='/login'
                src='/images/Logo.png'
                alt='Sable Fox Studio Logo'
                // name='Sable Fox Studio Logo'
                className='h-70'
              />
            </Link>
          </div>
        </div>
        <div className='w-full sm:flex-col sm:items-center sm:justify-between'>
          <div className='my-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <FooterIcon
              href='https://www.facebook.com/sablefoxstudio/'
              icon={BsFacebook}
            />
            <FooterIcon
              href='https://www.instagram.com/sablefoxstudio/'
              icon={BsInstagram}
            />
            <FooterIcon
              href='https://www.pinterest.com/sablefoxstudio/'
              icon={BsPinterest}
            />
            <FooterIcon
              href='mailto:sablefoxstudio@gmail.com'
              icon={BsEnvelope}
            />
          </div>
          <FooterCopyright
            href='#'
            by='Sable Fox Studio'
            year={2025}
          />
        </div>
      </div>
    </Footer>
  );
};
