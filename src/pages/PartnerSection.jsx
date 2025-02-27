import '../stylesheets/PartnerSection.css';

// Import partner logos
// Note: These would be replaced with your actual insurance partner logos
import placeholder from '../assets/logos/atmLogo.png';

const PartnerSection = () => {
  // Partner data could come from a CMS or config file in a real implementation
  const partners = [
    { id: 1, name: 'Insurance Partner 1', logo: placeholder },
    { id: 2, name: 'Insurance Partner 2', logo: placeholder },
    { id: 3, name: 'Insurance Partner 3', logo: placeholder },
    { id: 4, name: 'Insurance Partner 4', logo: placeholder },
    { id: 5, name: 'Insurance Partner 5', logo: placeholder },
  ];

  return (
    <section className="partner-section p-4">
      <div className="container">
        <h2>Nuestros socios:</h2>
        <div className="flex flex-wrap">
          {partners.map(partner => (
            <img key={partner.id} src={partner.logo} alt={partner.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;