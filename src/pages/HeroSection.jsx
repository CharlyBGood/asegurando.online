import PartnerSection from './PartnerSection';
import { Slideshow } from './Slideshow';

const HeroSection = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Slideshow />
      <PartnerSection />
    </div>
  );
};

export default HeroSection;

