'use client';

import Image from 'next/image';
import PortfolioCard from '../_components/portfolioCard';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// const Portfolio: React.FC = function () {
//   return (
//     <div className='min-h-screen'>
//       {/* <p className='text-center text-white mt-40 text-4xl'>
//         Portfolio coming soon!
//       </p> */}

//       <div className='m-10 flex gap-4 flex-wrap'>
//         <PortfolioCard imageName='/portfolio/charcoal-dog.jpg' />
//         <PortfolioCard imageName='/portfolio/arctic-fox.jpg' />
//         <PortfolioCard imageName='/portfolio/baby-fox.jpg' />
//         <PortfolioCard imageName='/portfolio/charcoal-dog.jpg' />
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

const Portfolio: React.FC = function () {
  return (
    <div className='min-h-screen m-10'>
      {/* <p className='text-center text-white mt-40 text-4xl'>
        Portfolio coming soon!
      </p> */}

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
        <Masonry gutter='24px'>
          <div className='mb-6'>
            <PortfolioCard imageName='/portfolio/charcoal-dog.jpg' />
          </div>
          <div className='mb-6'>
            <PortfolioCard imageName='/portfolio/arctic-fox.jpg' />
          </div>
          <div className='mb-6'>
            <PortfolioCard imageName='/portfolio/baby-fox.jpg' />
          </div>
          <div className='mb-6'>
            <PortfolioCard imageName='/portfolio/charcoal-dog.jpg' />
          </div>
          <div className='mb-6'>
            <PortfolioCard imageName='/portfolio/arctic-fox.jpg' />
          </div>
          <div className='mb-6'>
            <PortfolioCard imageName='/portfolio/arctic-fox.jpg' />
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Portfolio;
