import React from 'react';
import PartnersLogos from './utilities/PartnersLogos';
import { FaEdit } from "react-icons/fa";

const PartnersCard = React.memo(() => {
  return (
    <div className="description-container bg-bgDarkBlue p-4 flex-1">
      <h2 className='text-2xl mb-4 text-center'>Con las siguientes compañías:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
        {PartnersLogos.map(({ id, name, logo }) => (
          <div key={id} className="flex flex-col items-center justify-center space-y-1">
            <img
              className='w-20 h-20 object-contain rounded-lg shadow-md'
              src={logo}
              alt={`Logo of ${name}`}
            />
            <FaEdit className="text-lightBlue text-xl" />
          </div>
        ))}
      </div>
    </div>
  );
});

export default PartnersCard;