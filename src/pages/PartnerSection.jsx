import React from 'react';
import CallToActionSection from './CallToActionSection';
import PartnersCard from './PartnersCard';

const PartnerSection = React.memo(() => {
  return (
    <div className='bg-bgDarkBlue flex flex-col lg:flex-row justify-start items-start gap-8 p-6 mx-2 my-4 min-h-[80vh]'>
      <div className="w-full lg:w-1/2">
        <CallToActionSection />
      </div>
      <div className="w-full lg:w-1/2">
        <PartnersCard />
      </div>
    </div>
  );
});

export default PartnerSection;