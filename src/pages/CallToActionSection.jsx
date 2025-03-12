const CallToActionSection = () => {
  return (
    // <section className="w-9/10 flex justify-center bg-bgDarkBlue">
      <div className="flex-1 p-4 text-blueGray">
        <h1 className='mb-4 text-4xl'>Seguro, simple. Rápido.</h1>
        <p className='mb-2 text-xl'>Cotizá tu vehículo con ATM y asegurá en minutos</p>
        <button
          className="rounded-full p-(--cta-btn-padding) bg-lightBlue text-lg cursor-pointer hover:bg-lightBlueHover text-Black">
          ¡COTIZA YA!
        </button>
      </div>
    // </section>
  );
};

export default CallToActionSection;

