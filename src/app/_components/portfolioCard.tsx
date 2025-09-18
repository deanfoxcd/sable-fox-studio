'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioCard = ({ imageName }: { imageName: string }) => {
  return (
    <div className='text-black dark:text-white'>
      <Card className='w-[350px] flex flex-col justify-between shadow-2xl overflow-hidden bg-[hsl(56,12%,65%)] border-none p-2'>
        <Link
          href=''
          className='block w-full h-full'
        >
          <div className=' w-full'>
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
            />
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default PortfolioCard;
