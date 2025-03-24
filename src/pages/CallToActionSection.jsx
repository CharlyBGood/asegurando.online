const atm = "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1741819703/atmLogo_zgzx7l.png"
import { CTAButton } from "./utilities/CTAButton";

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
      <CTAButton />
    </div>
  );
};

export default CallToActionSection;

