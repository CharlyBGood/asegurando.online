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
      <div className="description-container bg-white/5 p-6 flex-1 rounded-lg border border-blueGray/20 h-full">
        <h2 className='text-2xl md:text-3xl mb-8 text-center text-lightBlue font-bold'>
          Con las siguientes compañías:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {PartnersLogos.map((partner, index) => (
            <div 
              key={partner.id} 
              className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg"
              onClick={() => handlePartnerClick(partner, index)}
            >
              <img
                className='w-full h-full object-contain p-3'
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