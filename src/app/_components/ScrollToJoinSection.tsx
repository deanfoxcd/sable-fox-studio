'use client';
import { useEffect, useRef, useState } from 'react';
import Newsletter from './newsletter';
import { HiArrowLongDown } from 'react-icons/hi2';
import ContactForm from './contactForm';

interface ScrollToJoinSectionProps {
  children: React.ReactNode;
  role: string;
}

export default function ScrollToJoinSection({
  children,
  role,
}: ScrollToJoinSectionProps) {
  const newsletterRef = useRef<HTMLDivElement | null>(null);
  const [showScrollDiv, setShowScrollDiv] = useState(true);

  useEffect(() => {
    const node = newsletterRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        console.log('IntersectionObserver entry:', entry);

        setShowScrollDiv(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <>
      {/* <section className='min-h-screen flex flex-col items-center bg-transparent pt-45'>
        <div className='text-white px-4'>
          <h1 className='tracking-tight leading-none'>
            <em>
              nostalgic fine art that honors the beauty of nature in heirloom
            </em>
          </h1>
          <p className='mt-14 max-w-2xl mb-6 font-light lg:mb-8 md:text-xl lg:text-2xl'>
            Welcome to <em className='font-semibold'>Sable Fox Studio</em>
          </p>
        </div> */}
      <section className='min-h-screen flex flex-col items-center relative'>
        <div className='flex items-center justify-center flex-1'>
          {children}
        </div>

        {showScrollDiv && (
          <div className='mt-auto mb-50 text-white flex items-center gap-2'>
            <p>Scroll to {role === 'home' ? 'join' : 'contact me'}</p>
            <HiArrowLongDown />
          </div>
        )}
      </section>
      {/* </section> */}
      <div ref={newsletterRef}>
        {role === 'home' && <Newsletter />}
        {role === 'inquire' && <ContactForm />}
      </div>
    </>
  );
}
