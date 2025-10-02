'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';

const PortfolioCard = ({
  imageName,
  onImageClick,
}: {
  imageName: string;
  onImageClick: (imageName: string) => void;
}) => {
  return (
    <div className='text-white'>
      <Card className='w-full max-w-[350px] mx-auto flex flex-col justify-between shadow-2xl overflow-hidden !bg-[hsl(56,12%,65%)] border-none p-2'>
        <div className='block w-full h-full'>
          <div className='w-full cursor-pointer'>
            <Image
              src={imageName}
              alt=''
              width={350}
              height={350}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              priority={true}
              onClick={() => onImageClick(imageName)}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PortfolioCard;
