'use client';

import '../globals.css';
import { Navbar, NavbarCollapse, NavbarLink } from 'flowbite-react';
import Link from 'next/link';
import { customTheme } from '../styles/themes';
import { usePathname } from 'next/navigation';

const NavbarComponent: React.FC = function () {
  const pathname = usePathname();

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
            active={pathname === '/'}
          >
            Home
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/about'
            active={pathname === '/about'}
          >
            About
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/portfolio'
            active={pathname === '/portfolio'}
          >
            Portfolio
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/commissions'
            active={pathname === '/commissions'}
          >
            Commission
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/journal'
            active={pathname === '/journal'}
          >
            Journal
          </NavbarLink>
          <NavbarLink
            as={Link}
            href='/inquire'
            active={pathname === '/inquire'}
          >
            Inquire
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
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
