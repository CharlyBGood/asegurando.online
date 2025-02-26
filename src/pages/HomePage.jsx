import QuoteToolContainer from './QuoteToolContainer';
import HeroSection from './HeroSection';
import PartnerSection from './PartnerSection';
import '../stylesheets/HomePage.css';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <section className="quote-section">
        <QuoteToolContainer />
      </section>
      <div className="highlight-strip"></div>
      <PartnerSection />
    </main>
  );
};

export default HomePage;



