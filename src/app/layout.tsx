import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './_components/header';
import Navbar from './_components/navbar';
import { FooterComponent } from './_components/footer';
import { ThemeModeScript } from 'flowbite-react';
import BackgroundImage from './_components/backgroundImg';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundImage />
        <Header />
        <Navbar />
        <main className='mt-12'>{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
