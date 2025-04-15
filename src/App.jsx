import Navigation from './pages/Navigation';
import Footer from './pages/Footer';
import HeroSection from './pages/HeroSection';
import './App.css';
import { WhatsAppBtn } from './pages/utilities/WhatsAppBtn';

const App = () => {
  return (
    <div className="flex flex-col font-federo bg-bgDarkBlue text-blueGray">
      <Navigation />
      <HeroSection />
      <WhatsAppBtn />
      <Footer />
    </div>
  );
};

export default App;


