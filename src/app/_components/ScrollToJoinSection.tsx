"use client";
import { useEffect, useRef, useState } from "react";
import Newsletter from "./newsletter";
import { HiArrowLongDown } from "react-icons/hi2";

export default function ScrollToJoinSection() {
  const newsletterRef = useRef<HTMLDivElement | null>(null);
  const [showScrollDiv, setShowScrollDiv] = useState(true);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowScrollDiv(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    if (newsletterRef.current) {
      observer.observe(newsletterRef.current);
    }
    return () => {
      if (newsletterRef.current) {
        observer.unobserve(newsletterRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center bg-transparent pt-45">
        <div className="text-white text-center px-4">
          <h1 className="tracking-tight leading-none">
            <em>
              nostalgic fine art that honors the beauty of nature in heirloom
            </em>
          </h1>
          <p className="mt-14 max-w-2xl mb-6 font-light lg:mb-8 md:text-xl lg:text-2xl">
            Welcome to <em>Sable Fox Studio</em>
          </p>
        </div>
        {showScrollDiv && (
          <div className="mt-auto mb-40 text-white flex items-center gap-2">
            <p>Scroll to join</p>
            <HiArrowLongDown />
          </div>
        )}
      </section>
      <div ref={newsletterRef}>
        <Newsletter />
      </div>
    </>
  );
}
