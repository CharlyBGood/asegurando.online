import atm from '../assets/partners/atmLogo.png';

const CallToActionSection = () => {
  return (
    <div className="flex-1 p-4 text-blueGray flex flex-col justify-center items-start">
      <h1 className='mb-4 text-4xl'>Seguro, simple. Rápido.</h1>
      <p className='mb-2 text-xl'>
        Cotizá tu vehículo y asegurá en minutos con nuestra herramienta en 
        <img
        className='ml-2 inline w-15 h-15 object-contain rounded-lg shadow-md'
        src={atm}
        alt="Logo of ATM Seguros"
      />
      </p>
      <button
        className="rounded-full p-(--cta-btn-padding) bg-lightBlue text-lg cursor-pointer hover:bg-lightBlueHover text-Black">
        <a href="https://ecommerce.atmseguros.com.ar/" target="_blank" rel="noopener noreferrer">
          ¡COTIZA YA!
        </a>
      </button>
    </div>
  );
};

export default CallToActionSection;

