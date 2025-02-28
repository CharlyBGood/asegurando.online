import CallToActionSection from './CallToActionSection';
// import PartnerSection from './PartnerSection';
import Welcome from './Welcome';
import { Slideshow } from './Slideshow';

const HeroSection = () => {
  return (
    <div className='flex flex-col'>
      <Slideshow />
      <section className="w-9/10 m-auto flex justify-center bg-bgDarkBlue">
        {/* <Welcome /> */}
        <CallToActionSection />
      </section>
    </div>
  );
};

export default HeroSection;

