'use client';

import dynamic from 'next/dynamic';

const Masonary = dynamic(() => import('../_components/masonary'), {
  ssr: false,
});

const Portfolio: React.FC = function () {
  return (
    <div className='min-h-screen m-4 sm:m-6 md:m-10'>
      <Masonary />
    </div>
  );
};

export default Portfolio;
