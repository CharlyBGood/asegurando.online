import PartnerSection from './PartnerSection';

const HeroSection = () => {
  return (
    <section className="flex justify-evenly bg-bgDarkBlue">
      <div className="p-4 text-blueGray">
        <h1 className='mb-4 text-4xl'>Seguro, simple. Rápido.</h1>
        <p className='mb-2 text-xl'>Cotizá tu vehículo con ATM y contratá en minutos</p>
        <button
          className="rounded-full p-(--cta-btn-padding) bg-lightBlue text-lg cursor-pointer hover:bg-lightBlueHover text-Black">
          COTIZAR AHORA
        </button>
      </div>
      <PartnerSection />
    </section>
  );
};

export default HeroSection;

