'use client';

import { Masonry } from 'masonic';
import PortfolioCard from './portfolioCard';
import { useEffect, useState } from 'react';
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
  const [columns, setColumns] = useState<number>(3);

  useEffect(() => {
    const calcColumns = () => {
      const width = window.innerWidth;
      if (width < 640) return 1; // sm-
      if (width < 1024) return 2; // md
      return 3; // lg+
    };
    const update = () => setColumns(calcColumns());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const onClose = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const onImageClick = (imageName: string) => {
    setIsModalOpen(true);
    setSelectedImage(imageName);
  };

  return (
    <>
      <Masonry
        items={images}
        columnGutter={24}
        columnCount={columns}
        render={({ data }) => (
          <div
            className='mb-6'
            key={data.id}
            // onClick={() => {
            //   setIsModalOpen(true);
            //   setSelectedImage(data.imageName);
            // }}
          >
            <PortfolioCard
              imageName={data.imageName}
              onImageClick={onImageClick}
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
