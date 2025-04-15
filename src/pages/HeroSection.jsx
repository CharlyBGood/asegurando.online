import PartnerSection from './PartnerSection';
import { Slideshow } from './Slideshow';
import WhoWeAre from './WhoWeAre';

const HeroSection = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Slideshow />
      </div>
      <div className="w-full mt-0 mb-0">
        <PartnerSection />
      </div>
      <div className="w-full mt-0">
        <WhoWeAre />
      </div>
    </div>
  );
};

export default HeroSection;

