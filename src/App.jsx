import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation  from './pages/Navigation';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col font-federo bg-darkBlue text-blueGray">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


