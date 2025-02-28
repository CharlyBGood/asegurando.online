import React from 'react';
import PartnersLogos from './utilities/PartnersLogos';

const PartnerSection = React.memo(() => {
  return (
    <div className="description-container bg-bgDarkBlue">
      <h2 className='text-2xl mb-4 text-center'>Compañías con las que operamos:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-center">
        {PartnersLogos.map(({ id, name, logo }) => (
          <div key={id} className="flex items-center justify-center">
            <img
              className='w-20 h-20 object-contain rounded-lg shadow-md'
              src={logo}
              alt={`Logo of ${name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default PartnerSection;