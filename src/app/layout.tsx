import type { Metadata } from 'next';

import { ThemeModeScript } from 'flowbite-react';
import BackgroundImage from './_components/backgroundImg';
import FloatingCartWrapper from './_components/FloatingCartWrapper';
import { FooterComponent } from './_components/footer';
import Header from './_components/header';
import Navbar from './_components/navbar';
import './globals.css';
import QueryProviderWrapper from './providers/QueryProvider';

import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sable Fox Studio',
  description: 'Website for Sable Fox Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProviderWrapper>
      <html
        lang='en'
        suppressHydrationWarning
      >
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${cormorant.className} antialiase min-h-screen flex flex-col`}
        >
          <div>
            <BackgroundImage />
            <Header />
            <Navbar />
            <FloatingCartWrapper />
          </div>
          <main className='flex-1'>{children}</main>
          <FooterComponent />
        </body>
      </html>
    </QueryProviderWrapper>
  );
}
