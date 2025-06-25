'use client';

import { usePathname } from 'next/navigation';

const backgroundMap: Record<string, string> = {
  '/': '/images/homepage-bg.jpg',
  '/shop': '/images/admin-bg.jpeg',
  '/shop/*': '/images/product-page copy.jpg',
  '/portfolio': '/images/portfolio.jpeg',
  '/commissions': '/images/commissions-bg.jpeg',
  '/journal': '/images/journal.jpg',
  '/about': '/images/homepage-bg.jpg',
  '/inquire': '/images/inquire.jpeg',
  '/cart': '/images/black.jpg',
  '/login': '/images/commissions-bg.jpeg',
  '/admin/products': '/images/black.jpg',
  '/admin/products/*': '/images/black.jpg',
  '/admin/edit-product/*': '/images/black.jpg',
  '/admin/journal/add-entry': '/images/black.jpg',
};

export default function BackgroundImage() {
  const pathname = usePathname();
  let bg = backgroundMap[pathname];
  if (!bg) {
    for (const key of Object.keys(backgroundMap)) {
      if (key.endsWith('*')) {
        const base = key.slice(0, -1);
        if (pathname.startsWith(base)) {
          bg = backgroundMap[key];
          break;
        }
      }
    }
  }
  if (!bg) bg = '/images/default-bg.jpg';

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
