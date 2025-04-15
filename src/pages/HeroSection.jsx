import PartnerSection from './PartnerSection';
import { Slideshow } from './Slideshow';
import WhoWeAre from './WhoWeAre';

const HeroSection = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Slideshow />
      </div>
      <div className="w-full mt-0 mb-0"> {/* Ensure no extra spacing */}
        <PartnerSection />
      </div>
      <div className="w-full mt-0"> {/* Remove unnecessary top margin */}
        <WhoWeAre />
      </div>
    </div>
  );
};

export default HeroSection;

