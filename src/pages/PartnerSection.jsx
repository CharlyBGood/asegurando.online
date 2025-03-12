import React from 'react';
import PartnersLogos from './utilities/PartnersLogos';
import CallToActionSection from './CallToActionSection';
import PartnersCard from './PartnerssCard';

const PartnerSection = React.memo(() => {
  return (
    <div className='bg-bgDarkBlue flex justify-center rounded m-4 p-2 border-blueGray'>
      <CallToActionSection />
      <PartnersCard />
    </div>

  );
});

export default PartnerSection;