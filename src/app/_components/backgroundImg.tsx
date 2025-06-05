'use client';

import { usePathname } from 'next/navigation';

const backgroundMap: Record<string, string> = {
  '/': '/images/homepage-bg.jpg',
  '/about': '',
  '/commissions': '/images/commissions-bg.jpeg',
  '/login': '/images/commissions-bg.jpeg',
  '/products': '/images/black.jpg',
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
