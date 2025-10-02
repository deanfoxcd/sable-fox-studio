import Image from 'next/image';
import AboutAccordion from '../_components/aboutAccordion';

const page: React.FC = function () {
  return (
    <div className='min-h-screen !bg-[#C2BFCB] !text-[var(--main-brown)]'>
      <div className='flex flex-col xl:flex-row justify-between mt-8 xl:mt-16'>
        <div className='w-full xl:flex-1'>
          <p className='text-3xl lg:text-5xl font-light px-4 py-4 lg:px-16 lg:py-8'>
            Welcome to my little studio! My name is Isabelle Fox, and I am the
            artist behind Sable Fox Studio. I am based in the foothills of the
            Smoky Mountains of Tennessee with my husband Dean, our little
            Shetland Sheepdog, Murphy, and our cat, Bob.
          </p>
          <hr className='ml-16 mr-180' />
          <p className='px-4 py-4 text-lg lg:text-3xl lg:px-16 lg:py-8'>
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
        <div className='w-full max-w-xs mx-auto aspect-[3/4] h-auto relative mt-6 xl:mt-0 xl:w-64 xl:aspect-[3/4] xl:h-auto xl:mx-0 xl:max-w-none'>
          <Image
            src='/images/about-1.jpeg'
            alt='Belle'
            fill
            className='object-cover rounded-lg'
            sizes='(max-width: 1024px) 100vw, 50vw'
          />
        </div>
      </div>

      <div className='w-full max-w-2xl mx-auto px-4'>
        <AboutAccordion />
      </div>

      <div className='text-[var(--main-brown)] my-10 pb-10 text-xl w-full max-w-3xl xl:max-w-5xl mx-auto px-4 lg:my-30 lg:pb-20 lg:text-4xl'>
        <p>
          <em>
            &quot;My art seeks to create a feeling from a familiar past, a
            memory of a gentler time. Honoring the essence of your beloved
            companion brings me immense joy and pride, and I truly believe that
            their life is worthy of remembrance and honor. Valuing the beloved
            bond between us and our animals is what brings my heart to
            life.&quot;
          </em>
        </p>
      </div>
    </div>
  );
};

export default page;
