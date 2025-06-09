'use client';

import { Navbar, NavbarCollapse, NavbarLink } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCartFill } from 'react-icons/bs';
import '../globals.css';
import { customTheme } from '../styles/themes';

const NavbarComponent: React.FC = function () {
  const pathname = usePathname();

  return (
    <div className='relative flex items-center justify-center'>
      <Navbar
        rounded
        fluid
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

          <NavbarLink
            as={Link}
            href='/cart'
            active={pathname === '/cart'}
          >
            <BsCartFill />
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
