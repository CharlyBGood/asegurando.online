const WhoWeAre = () => {
  return (
    <div className="w-full">
      <div className="respalda-container flex flex-row flex-wrap p-2 m-2">
        <div className="flex-1 flex justify-center bg-image-sonicMan">
        </div>
        <div className="flex-1 lg:ml-8 respalda-text-container">
          <h2 className="text-2xl mb-2 text-center lg:text-left">
            <b className="text-Golden">Q</b>uién <b className="text-Golden">N</b>os <b className="text-Golden">R</b>espalda
          </h2>
          <p className="text-blueGray text-center lg:text-left mb-2">
            <a className="text-lightBlue">Maschio y Asoc.</a> se complementa con{" "}
            <b className="text-Golden">Grupo Baioni Internacional</b> – Broker líder con más de 40 años de
            experiencia en el mercado y profesionales altamente capacitados.
          </p>
          <p className="text-blueGray text-center lg:text-left">
            Encontramos así un aliado estratégico que brinda respaldo a nuestro canal de
            comercialización.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhoWeAre;