import '../stylesheets/PartnerSection.css';

import PartnersLogos from './utilities/PartnersLogos'

const PartnerSection = () => {
  
  return (    
      <div className="flex flex-col items-center p-4">
        <h2 className='text-xl mb-4 text-center'>Compañías con las que operamos:</h2>
        <div className="w-7/10 flex flex-wrap gap-4 p-4 justify-center">
          {PartnersLogos.map(partner => (
            <img 
              className='w-20 h-20 object-contain rounded-lg shadow-md' 
              key={partner.id} 
              src={partner.logo} 
              alt={partner.name} 
            />
          ))}
        </div>
      </div>
  );
};

export default PartnerSection;