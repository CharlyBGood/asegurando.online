import React from 'react';
import PartnersLogos from './utilities/PartnersLogos';

const PartnerSection = React.memo(() => {
  return (
    <div className="description-container bg-bgDarkBlue">
      {/* <div className="flex-1 flex flex-col items-center p-4"> */}
      <h2 className='text-2xl mb-4 text-center'>Compañías con las que operamos:</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center"> */}
        {PartnersLogos.map(({ id, name, logo }) => (
          <img
            className='w-20 h-20 object-contain rounded-lg shadow-md'
            key={id}
            src={logo}
            alt={`Logo of ${name}`}
          />
        ))}
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
});

export default PartnerSection;