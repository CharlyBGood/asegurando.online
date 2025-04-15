import { useEffect, useState } from 'react';

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-4 md:py-6 px-4 md:px-8 bg-gradient-to-b from-[#03070f] to-[#253878]/10 mt-0"> 
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div
          className={`w-full md:w-1/2 aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ease-in-out transform ${
            isVisible ? 'scale-100' : 'scale-95'
          }`}
        >
          <img
            src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1744732326/futura_vnrnsu.png"
            alt="Quién Nos Respalda"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div
          className={`w-full md:w-1/2 space-y-4 md:space-y-6 transition-all duration-1000 delay-500 ease-in-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="bg-[rgba(3,7,15,0.81)] backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 shadow-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-['Federo'] text-white">
              <span className="text-[#f7d16e]">Q</span>uién{' '}
              <span className="text-[#f7d16e]">N</span>os{' '}
              <span className="text-[#f7d16e]">R</span>espalda
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg lg:text-xl text-[#d3dde6] leading-relaxed">
                <a
                  href="#"
                  className="text-[#44b0de] hover:text-[#3a9ecb] transition-colors duration-300"
                >
                  Maschio y Asoc.
                </a>{' '}
                se complementa con{' '}
                <span className="text-[#f7d16e] font-semibold">
                  Grupo Baioni Internacional
                </span>{' '}
                – Broker líder con más de 40 años de experiencia en el mercado con
                profesionales altamente capacitados.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-[#d3dde6] leading-relaxed">
                Logrando así un aliado estratégico que brinda respaldo a nuestro
                canal de comercialización.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;