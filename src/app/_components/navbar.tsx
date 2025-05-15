import '../globals.css';
import { Navbar, NavbarCollapse, NavbarLink } from 'flowbite-react';
import Link from 'next/link';
import { customTheme } from '../styles/themes';

const NavbarComponent: React.FC = function () {
  return (
    <div className='relative flex items-center justify-center'>
      <Navbar
        rounded
        fluid
        // className='flex gap-10'
        theme={customTheme.navbar}
      >
        <NavbarCollapse>
          <NavbarLink
            as={Link}
            href='/'
            active
          >
            Home
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/about'
          >
            About
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/portfolio'
          >
            Portfolio
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/commission'
          >
            Commission
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/journal'
          >
            Journal
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/inquire'
          >
            Inquire
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <p className='absolute right-8'>Socials</p>
    </div>

    // <div>
    //   <ul className='flex justify-center gap-10 font-cormorant text-xl'>
    //     <li>About</li>
    //     <li>Portfolio</li>
    //     <li>Commission</li>
    //     <li>Journal</li>
    //     <li>Inquire</li>
    //   </ul>
    // </div>
  );
};

export default NavbarComponent;
