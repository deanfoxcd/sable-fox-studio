import './globals.css';
import ScrollToJoinSection from './_components/ScrollToJoinSection';
import LandingPage from './_components/landingPage';

export default function Home() {
  return (
    <div className='text-xl items-center justify-items-center '>
      <ScrollToJoinSection role='home'>
        <LandingPage />
      </ScrollToJoinSection>
    </div>
  );
}
