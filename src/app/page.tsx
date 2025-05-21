import Newsletter from './_components/newsletter';
import './globals.css';

export default function Home() {
  return (
    <div className='text-xl items-center justify-items-center min-h-screen font-cormorant'>
      <section className='min-h-screen flex flex-col items-center bg-transparent pt-45'>
        <div className='text-white text-center px-4'>
          <h1 className='tracking-tight leading-none'>
            <em>
              nostalgic fine art that honors the beauty of nature in heirloom
            </em>
          </h1>
          <p className='mt-14 max-w-2xl mb-6 font-light lg:mb-8 md:text-xl lg:text-2xl'>
            Welcome to <em>Sable Fox Studio</em>
          </p>
        </div>

        <div className='mt-auto mb-40 text-white'>Scroll to join</div>
      </section>

      <Newsletter />
    </div>
  );
}
