'use client';

import Link from 'next/link';
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { usePathname } from 'next/navigation';

import { customTheme } from '../styles/themes';

const NavbarComponent: React.FC = function () {
  const pathname = usePathname();

  return (
    <div className='relative flex items-center justify-center'>
      <Navbar
        rounded
        fluid
        theme={customTheme.navbar}
        className='divide-white border-white'
      >
        <div className='flex flex-col items-center w-full'>
          <NavbarToggle className='text-white' />
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
              href='/shop'
              active={pathname === '/shop'}
            >
              Shop
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
              href='/about'
              active={pathname === '/about'}
            >
              About
            </NavbarLink>

            <NavbarLink
              as={Link}
              href='/inquire'
              active={pathname === '/inquire'}
            >
              Inquire
            </NavbarLink>

            {/* <NavbarLink
              as={Link}
              href='/cart'
              active={pathname === '/cart'}
            ></NavbarLink> */}
          </NavbarCollapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
