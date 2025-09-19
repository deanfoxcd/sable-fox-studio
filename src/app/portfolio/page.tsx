'use client';

import dynamic from 'next/dynamic';

const Masonary = dynamic(() => import('../_components/masonary'), { ssr: false });
import PortfolioCard from '../_components/portfolioCard';

// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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
      <Masonary />
    </div>
  );
};

export default Portfolio;
