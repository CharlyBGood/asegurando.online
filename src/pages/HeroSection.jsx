import CallToActionSection from './CallToActionSection';
import { Slideshow } from './Slideshow';

const HeroSection = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Slideshow />
      <CallToActionSection />
    </div>
  );
};

export default HeroSection;

