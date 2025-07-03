'use client';

import { usePathname } from 'next/navigation';

import FloatingCart from './floatingCart';

const FloatingCartWrapper = () => {
  const pathname = usePathname();

  if (pathname === '/cart' || pathname.startsWith('/admin')) {
    return null;
  }

  return <FloatingCart />;
};

export default FloatingCartWrapper;
