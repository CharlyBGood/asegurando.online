import React from 'react';
import { CTAButton } from './utilities/CTAButton';

const CTASection = React.memo(() => {
  return (
    <div className="description-container bg-white/5 p-4 md:p-6 flex-1 rounded-lg border border-blueGray/20 h-full">
      <h2 className='text-xl md:text-2xl mb-4 text-center text-lightBlue font-bold'>
        ¿Quieres asegurar tu vehículo?
      </h2>
      <p className='text-base md:text-lg text-center text-blueGray mb-4'>
        Contactanos y te ayudamos a encontrar la mejor opción para vos.
      </p>
      <div className="flex justify-center">
        <CTAButton href="https://wa.me/5491156999580">
          Hablemos por WhatsApp
        </CTAButton>
      </div>
    </div>
  );
});

export default CTASection; 