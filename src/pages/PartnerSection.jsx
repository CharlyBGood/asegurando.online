import React from 'react';
import CallToActionSection from './CallToActionSection';
import PartnersCard from './PartnersCard';

const PartnerSection = React.memo(() => {
  return (
    <div className="bg-bgDarkBlue flex flex-col lg:flex-row justify-between items-start gap-6 p-4 md:p-6 mx-auto my-4 max-w-7xl min-h-[70vh]">
      {/* Call to Action Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <CallToActionSection />
      </div>

      {/* Partners Card Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <PartnersCard />
      </div>
    </div>
  );
});

export default PartnerSection;