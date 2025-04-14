import { useEffect, useState } from 'react';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full py-8 px-4 md:py-12 md:px-6">
      <div className={`respalda-container flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-4 md:p-6 transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <img src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1744658266/partneraliance_ad5etf.png" alt="" />
        <div className={`flex-1 w-full md:w-1/2 respalda-text-container flex flex-col items-start justify-center transition-all duration-1000 delay-500 ease-in-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <h2 className="text-2xl md:text-3xl mb-6 text-left font-federo">
            <span className="text-Golden">Q</span>uién <span className="text-Golden">N</span>os <span className="text-Golden">R</span>espalda
          </h2>
          <p className="text-blueGray text-base md:text-lg text-left mb-6 leading-relaxed max-w-xl">
            <a className="text-lightBlue hover:text-lightBlue/80 transition-colors">Maschio y Asoc.</a> se complementa con{" "}
            <span className="text-Golden font-bold">Grupo Baioni Internacional</span> – Broker líder con más de 40 años de
            experiencia en el mercado y profesionales altamente capacitados.
          </p>
          <p className="text-blueGray text-base md:text-lg text-left leading-relaxed max-w-xl">
            Encontramos así un aliado estratégico que brinda respaldo a nuestro canal de
            comercialización.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;