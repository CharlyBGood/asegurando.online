import React, { useState, useEffect } from 'react';
import {
  FaShieldAlt,
  FaClock,
  FaHandHoldingUsd,
  FaUserCheck,
  FaCar,
  FaHospital,
  FaBriefcase,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
} from 'react-icons/fa';

const getBenefitIcon = (benefit) => {
  const lowerBenefit = benefit.toLowerCase();
  if (lowerBenefit.includes('cobertura')) return <FaShieldAlt className="text-lightBlue text-lg" />;
  if (lowerBenefit.includes('24/7') || lowerBenefit.includes('emergencia')) return <FaClock className="text-lightBlue text-lg" />;
  if (lowerBenefit.includes('descuento') || lowerBenefit.includes('precio')) return <FaHandHoldingUsd className="text-lightBlue text-lg" />;
  if (lowerBenefit.includes('personalizada')) return <FaUserCheck className="text-lightBlue text-lg" />;
  if (lowerBenefit.includes('taller')) return <FaCar className="text-lightBlue text-lg" />;
  if (lowerBenefit.includes('médica')) return <FaHospital className="text-lightBlue text-lg" />;
  if (lowerBenefit.includes('legal')) return <FaBriefcase className="text-lightBlue text-lg" />;
  return <FaPhoneAlt className="text-lightBlue text-lg" />;
};

export const PartnerBenefitsModal = ({ partner, onClose, onNext, onPrevious, isFirst, isLast }) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 3000);

    return () => clearInterval(pulseTimer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bgDarkBlue/90 overflow-y-auto">
      <div className="relative w-full max-w-md md:max-w-lg mx-4 p-[2em] bg-bgDarkBlue rounded-lg shadow-lg border border-blueGray/20">
        <div className="flex justify-between items-center bg-lightBlue p-2 rounded-t-lg">
          <img
            src={partner.logo}
            alt={`Logo of ${partner.name}`}
            className="p-[.5em] h-12 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="text-4xl text-Black hover:text-lightBlueHover cursor-pointer focus:outline-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 mt-4">
          <h3 className="text-lg md:text-xl font-semibold text-center text-Golden">
            Beneficios
          </h3>
          <ul className="space-y-3">
            {partner.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-blueGray text-sm md:text-base"
              >
                {getBenefitIcon(benefit)}
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className={`cursor-pointer flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 ${isFirst
              ? 'opacity-50 cursor-not-allowed bg-blueGray/20'
              : 'bg-lightBlue hover:bg-lightBlueHover hover:scale-110'
              }`}
            aria-label="Previous partner"
          >
            <FaChevronLeft className="text-lg md:text-xl text-Black" />
          </button>
          <button
            onClick={onNext}
            disabled={isLast}
            className={`cursor-pointer flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 ${isLast
              ? 'opacity-50 cursor-not-allowed bg-blueGray/20'
              : 'bg-lightBlue hover:bg-lightBlueHover hover:scale-110'
              }`}
            aria-label="Next partner"
          >
            <FaChevronRight className="text-lg md:text-xl text-Black" />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center bg-lightBlue p-4 rounded-b-lg">
          <a
            href="https://wa.me/5491156999580"
            target="_blank"
            rel="noopener noreferrer"
            className="text-Black font-semibold hover:underline"
            aria-label="Contact us on WhatsApp"
          >
            Hablemos por WhatsApp
          </a>
          <FaWhatsapp
            className={`inline-block ml-2 text-lg ${isPulsing ? 'animate-pulse text-Black' : 'text-Black'
              }`}
          />
        </div>
      </div>
    </div>
  );
};