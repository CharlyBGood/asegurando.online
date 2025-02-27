// import QuoteToolContainer from './QuoteToolContainer';
import HeroSection from './HeroSection';
// import PartnerSection from './PartnerSection';
import { Slideshow } from './Slideshow';

const HomePage = () => {
  return (
    <>
      <main className='bg-bgDarkBlue h-full'>
        <Slideshow />
        <HeroSection />
      </main>
      {/* <QuoteToolContainer /> */}
      {/* <PartnerSection /> */}
    </>

  );
};

export default HomePage;



