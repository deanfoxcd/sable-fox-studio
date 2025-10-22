import type { Metadata } from 'next';
import { ThemeModeScript } from 'flowbite-react';
import { Cormorant_Garamond } from 'next/font/google';

import './globals.css';
import BackgroundImage from './_components/backgroundImg';
import FloatingCartWrapper from './_components/FloatingCartWrapper';
import Header from './_components/header';
import Navbar from './_components/navbar';
import QueryProviderWrapper from './providers/QueryProvider';
import { FooterComponent } from './_components/footer';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

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
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          />
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
