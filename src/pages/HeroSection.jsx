import PartnerSection from './PartnerSection';
import { Slideshow } from './Slideshow';

const HeroSection = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <Slideshow />
      </div>
      <div className='w-full'>
        <PartnerSection />
      </div>
    </div>
  );
};

export default HeroSection;

