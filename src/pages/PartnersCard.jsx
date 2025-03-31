import React from 'react';
import PartnersLogos from './utilities/PartnersLogos';
import { FaEdit } from "react-icons/fa";

const PartnersCard = React.memo(() => {
  return (
    <div className="description-container bg-bgDarkBlue p-6 flex-1 rounded-lg">
      <h2 className='text-2xl mb-6 text-center text-blueGray'>Con las siguientes compañías:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {PartnersLogos.map(({ id, name, logo }) => (
          <div key={id} className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <img
              className='w-full h-full object-contain p-2'
              src={logo}
              alt={`Logo of ${name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default PartnersCard;