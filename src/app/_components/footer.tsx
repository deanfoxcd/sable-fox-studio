'use client';

import '../globals.css';

// const Footer: React.FC = function () {
//   return (
//     <div className='flex flex-col items-center justify-center gap-7'>
//       <h3 className='text-xl'>Sable Fox Studio</h3>
//       <p>Fine Artist</p>
//       <p>2025</p>
//     </div>
//   );
// };

// export default Footer;

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterIcon,
} from 'flowbite-react';
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
            <FooterBrand
              href=''
              src='/images/Logo.png'
              alt='Sable Fox Studio Logo'
              name='Sable Fox Studio Logo'
              className='h-70'
            />
          </div>
        </div>
        <div className='w-full sm:flex-col sm:items-center sm:justify-between'>
          <div className='my-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <FooterIcon
              href='#'
              icon={BsFacebook}
            />
            <FooterIcon
              href='#'
              icon={BsInstagram}
            />
            <FooterIcon
              href='#'
              icon={BsPinterest}
            />
            <FooterIcon
              href='#'
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
