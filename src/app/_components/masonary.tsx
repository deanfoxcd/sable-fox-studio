'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import PortfolioCard from './portfolioCard';

const Masonary: React.FC = function () {
  return (
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
          <PortfolioCard imageName='/portfolio/hunting-dog.jpg' />
        </div>
        <div className='mb-6'>
          <PortfolioCard imageName='/portfolio/hyena.jpg' />
        </div>
        <div className='mb-6'>
          <PortfolioCard imageName='/portfolio/two-arctic-foxes.jpg' />
        </div>
        <div className='mb-6'>
          <PortfolioCard imageName='/portfolio/two-wolves.jpg' />
        </div>
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Masonary;
