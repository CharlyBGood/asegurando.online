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
      <div className="description-container bg-white/5 p-4 md:p-6 flex-1 rounded-lg border border-blueGray/20 h-full">
        <h2 className='text-xl md:text-2xl mb-4 md:mb-6 text-center text-lightBlue font-bold'>
          Con las siguientes compañías:
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 justify-items-center">
          {PartnersLogos.map((partner, index) => (
            <div 
              key={partner.id} 
              className="w-full h-20 sm:w-full sm:h-20 md:w-full md:h-24 flex items-center justify-center bg-blueGray/90 rounded-lg hover:bg-blueGray/100 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg"
              onClick={() => handlePartnerClick(partner, index)}
            >
              <img
                className='w-full h-full object-contain p-2 sm:p-2 md:p-3'
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