'use client';

import { Masonry } from 'masonic';
import PortfolioCard from './portfolioCard';
import { useState } from 'react';
import PortfolioImageModal from './portfolioImageModal';

const images = [
  { id: 1, imageName: '/portfolio/charcoal-dog.jpg' },
  { id: 2, imageName: '/portfolio/arctic-fox.jpg' },
  { id: 3, imageName: '/portfolio/baby-fox.jpg' },
  { id: 4, imageName: '/portfolio/hunting-dog.jpg' },
  { id: 5, imageName: '/portfolio/hyena.jpg' },
  { id: 6, imageName: '/portfolio/two-arctic-foxes.jpg' },
  { id: 7, imageName: '/portfolio/two-wolves.jpg' },
];

const Masonary: React.FC = function () {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const onClose = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <Masonry
        items={images}
        columnGutter={24}
        columnCount={3}
        render={({ data }) => (
          <div
            className='mb-6'
            key={data.id}
            onClick={() => {
              setIsModalOpen(true);
              setSelectedImage(data.imageName);
            }}
          >
            <PortfolioCard
              imageName={data.imageName}
              isModalOpen={isModalOpen}
            />
          </div>
        )}
      />

      {isModalOpen && (
        <PortfolioImageModal
          imageName={selectedImage}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default Masonary;
