const WhoWeAre = () => {
  return (
    <div className="w-full py-6 px-4 md:py-8 md:px-6">
      <div className="respalda-container flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 md:p-6 bg-white/5 rounded-lg border border-blueGray/20">
        <div className="flex-1 w-full md:w-1/2 h-64 md:h-80 bg-image-sonicMan bg-cover bg-center rounded-lg shadow-lg">
        </div>
        <div className="flex-1 w-full md:w-1/2 respalda-text-container">
          <h2 className="text-2xl md:text-3xl mb-4 text-center md:text-left font-federo">
            <span className="text-Golden">Q</span>uién <span className="text-Golden">N</span>os <span className="text-Golden">R</span>espalda
          </h2>
          <p className="text-blueGray text-base md:text-lg text-center md:text-left mb-4 leading-relaxed">
            <a className="text-lightBlue hover:text-lightBlue/80 transition-colors">Maschio y Asoc.</a> se complementa con{" "}
            <span className="text-Golden font-bold">Grupo Baioni Internacional</span> – Broker líder con más de 40 años de
            experiencia en el mercado y profesionales altamente capacitados.
          </p>
          <p className="text-blueGray text-base md:text-lg text-center md:text-left leading-relaxed">
            Encontramos así un aliado estratégico que brinda respaldo a nuestro canal de
            comercialización.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;