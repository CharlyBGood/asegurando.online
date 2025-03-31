import React from 'react';
import CallToActionSection from './CallToActionSection';
import PartnersCard from './PartnersCard';

const PartnerSection = React.memo(() => {
  return (
    <div className='bg-bgDarkBlue flex flex-col md:flex-row justify-center items-center gap-4 p-6 border border-blueGray/20 rounded-lg mx-4 my-6'>
      <CallToActionSection />
      <PartnersCard />
    </div>
  );
});

export default PartnerSection;