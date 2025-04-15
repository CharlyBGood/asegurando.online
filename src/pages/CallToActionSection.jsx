const atm = "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1744650372/atm_mm2aaz.svg";
import { CTAButton } from "./utilities/CTAButton";

const CallToActionSection = () => {
  return (
    <div className="flex-1 p-4 md:p-6 text-blueGray flex flex-col justify-start items-center text-center bg-white/5 rounded-lg border border-blueGray/20 h-full">
      <div className="flex flex-col justify-start items-center w-full">
        <h1 className="mb-4 md:mb-6 text-2xl md:text-4xl lg:text-5xl font-bold text-lightBlue">
          Seguro, simple. Rápido.
        </h1>
        <p className="mb-4 md:mb-6 text-base md:text-xl lg:text-2xl max-w-2xl">
          Con nuestra herramienta de cotización en{' '}
          <img
            className="m-2 inline w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg shadow-lg"
            src={atm}
            alt="Logo of ATM Seguros"
          />
          cargá los datos de tu vehículo y asegurá en minutos.
        </p>
        <div className="transform hover:scale-105 transition-transform duration-300 mt-auto">
          <CTAButton btnText="¡COTIZA YA!" href="https://ecommerce.atmseguros.com.ar/" />
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;