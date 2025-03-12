import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Footer from './pages/Footer';
import HeroSection from './pages/HeroSection';
import './App.css';
import WhoWeAre from './pages/WhoWeAre';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col font-federo bg-bgDarkBlue text-blueGray">
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <WhoWeAre />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


