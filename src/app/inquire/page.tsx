import ContactForm from '../_components/contactForm';
import Newsletter from '../_components/newsletter';
import ScrollToJoinSection from '../_components/ScrollToJoinSection';

const Inquire: React.FC = function () {
  return (
    <div>
      <div className='text-xl items-center justify-items-center font-cormorant'>
        <ScrollToJoinSection role='inquire'>
          <Newsletter />
        </ScrollToJoinSection>
      </div>
    </div>
  );
};

export default Inquire;
