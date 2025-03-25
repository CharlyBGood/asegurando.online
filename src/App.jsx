import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Footer from './pages/Footer';
import HeroSection from './pages/HeroSection';
import './App.css';
import WhoWeAre from './pages/WhoWeAre';
import { WhatsAppBtn } from './pages/utilities/WhatsAppBtn';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col font-federo bg-bgDarkBlue text-blueGray">
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <WhoWeAre />
        <WhatsAppBtn />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


