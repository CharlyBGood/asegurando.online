import React from 'react';
import '../../stylesheets/Contact.css';
import { FaShieldAlt, FaClock, FaHandHoldingUsd, FaUserCheck, FaCar, FaHospital, FaBriefcase, FaPhoneAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const getBenefitIcon = (benefit) => {
  const lowerBenefit = benefit.toLowerCase();
  if (lowerBenefit.includes('cobertura')) return <FaShieldAlt className="text-lightBlue text-xl" />;
  if (lowerBenefit.includes('24/7') || lowerBenefit.includes('emergencia')) return <FaClock className="text-lightBlue text-xl" />;
  if (lowerBenefit.includes('descuento') || lowerBenefit.includes('precio')) return <FaHandHoldingUsd className="text-lightBlue text-xl" />;
  if (lowerBenefit.includes('personalizada')) return <FaUserCheck className="text-lightBlue text-xl" />;
  if (lowerBenefit.includes('taller')) return <FaCar className="text-lightBlue text-xl" />;
  if (lowerBenefit.includes('médica')) return <FaHospital className="text-lightBlue text-xl" />;
  if (lowerBenefit.includes('legal')) return <FaBriefcase className="text-lightBlue text-xl" />;
  return <FaPhoneAlt className="text-lightBlue text-xl" />;
};

export const PartnerBenefitsModal = ({ partner, onClose, onNext, onPrevious, isFirst, isLast }) => {
  return (
    <div className="modal-container-4">
      <div className="modal-content-4">
        <div className="modal-4-header">
          <h1 className="text-2xl font-federo text-Black">{partner.name}</h1>
          <span className="close-4" onClick={onClose}>×</span>
        </div>
        <div className="modal-display-4">
          <div className="modal-display-left">
            <img
              className="w-48 h-48 object-contain mx-auto mb-8"
              src={partner.logo}
              alt={`Logo of ${partner.name}`}
            />
          </div>
          <div className="modal-display-right">
            <h3 className="text-2xl font-federo text-center text-Golden mb-2">Beneficios</h3>
            <ul className="space-y-4">
              {partner.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-blueGray text-lg font-federo">
                  {getBenefitIcon(benefit)}
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-around items-center gap-8 m-2">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className={`cursor-pointer flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 
              ${isFirst
                ? 'opacity-50 cursor-not-allowed bg-white/5'
                : 'bg-lightBlue/20 hover:bg-lightBlue/30 hover:scale-110'
              }`}
            aria-label="Partner anterior"
          >
            <FaChevronLeft className="text-2xl text-lightBlue" />
          </button>
          <button
            onClick={onNext}
            disabled={isLast}
            className={`cursor-pointer flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 
              ${isLast
                ? 'opacity-50 cursor-not-allowed bg-white/5'
                : 'bg-lightBlue/20 hover:bg-lightBlue/30 hover:scale-110'
              }`}
            aria-label="Siguiente partner"
          >
            <FaChevronRight className="text-2xl text-lightBlue" />
          </button>
        </div>
        <div className="footer-lightblue">
          <div className="text-center text-lg">
            <a
              href="https://wa.me/5491156999580"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >Hablemos por WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}; 