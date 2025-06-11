import Image from 'next/image';

const page: React.FC = function () {
  return (
    <div className='min-h-screen'>
      <div className='flex justify-between mt-16'>
        <div className='flex-1 text-white'>
          <p className='text-5xl font-semibold px-16 py-8'>
            Welcome to my little studio! My name is Isabelle Fox, and I am the
            artist behind Sable Fox Studio. I am based in the foothills of the
            Smoky Mountains of Tennessee with my husband Dean, our little
            Shetland Sheepdog, Murphy, and our cat, Bob.
          </p>
          <p className='px-16 py-8 text-3xl'>
            Growing up I always felt such a deep connection with animals, a love
            that inspired me to capture their essence through pigments on
            tattered paper and soft linen. Surrounded by the Grand Tetons in
            Jackson Hole, Wyoming, my heart felt so free in the peaceful
            seclusion of nature. Every dog walking by on a hike became a new
            friend, and hours were spent poured over any book with a pup or
            ponies running across the pages. My family encouraged my creativity
            through art classes and helping me sell my first portrait of a
            friend’s beagle at the tender age of nine. My childhood was filled
            with countless adventures in the forest, long rides on horseback
            with a devoted dog at my side, and a peace found only in the
            innocent expression of creativity that has marked me forever.{' '}
          </p>
        </div>
        <div className='flex-1 relative'>
          <Image
            src='/images/about-1.jpeg'
            alt='Belle'
            fill
            className='object-cover'
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default page;
