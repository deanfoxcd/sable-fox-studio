'use client';

import { usePathname } from 'next/navigation';

const backgroundMap: Record<string, string> = {
  '/': '/images/homepage-bg.jpg',
  '/shop': '/images/admin-bg.jpeg',
  '/portfolio': '/images/portfolio.jpeg',
  '/commissions': '/images/commissions-bg.jpeg',
  '/journal': '/images/journal.jpg',
  '/about': '/images/about.jpeg',
  '/cart': '/images/black.jpg',
  '/login': '/images/commissions-bg.jpeg',
  '/admin/products': '/images/black.jpg',
  '/admin/edit-product/*': '/images/black.jpg',
};

export default function BackgroundImage() {
  const pathname = usePathname();
  const bg = backgroundMap[pathname] || '/images/default-bg.jpg';

  return (
    <img
      src={bg}
      alt='Background-Image'
      className='fixed inset-0 w-full h-full object-cover -z-10'
      aria-hidden='true'
      draggable={false}
    />
  );
}
