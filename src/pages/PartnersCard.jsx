import React, { useState } from 'react';
import PartnersLogos from './utilities/PartnersLogos';
import { PartnerBenefitsModal } from './utilities/PartnerBenefitsModal';

const PartnersCard = React.memo(() => {
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState(null);

  const handlePartnerClick = (partner, index) => {
    setSelectedPartnerIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPartnerIndex(null);
  };

  const handleNext = () => {
    if (selectedPartnerIndex < PartnersLogos.length - 1) {
      setSelectedPartnerIndex(selectedPartnerIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedPartnerIndex > 0) {
      setSelectedPartnerIndex(selectedPartnerIndex - 1);
    }
  };

  return (
    <>
      <div className="description-container bg-bgDarkBlue p-6 flex-1 rounded-lg">
        <h2 className='text-2xl mb-6 text-center text-blueGray'>Con las siguientes compañías:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {PartnersLogos.map((partner, index) => (
            <div 
              key={partner.id} 
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer"
              onClick={() => handlePartnerClick(partner, index)}
            >
              <img
                className='w-full h-full object-contain p-2'
                src={partner.logo}
                alt={`Logo of ${partner.name}`}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedPartnerIndex !== null && (
        <PartnerBenefitsModal 
          partner={PartnersLogos[selectedPartnerIndex]}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={selectedPartnerIndex === 0}
          isLast={selectedPartnerIndex === PartnersLogos.length - 1}
        />
      )}
    </>
  );
});

export default PartnersCard;