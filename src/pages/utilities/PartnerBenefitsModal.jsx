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
  FaBicycle,
} from 'react-icons/fa';

const getBenefitIcon = (benefit) => {
  const lowerBenefit = benefit.toLowerCase();

  // Cobertura y protección
  if (
    lowerBenefit.includes('cobertura') ||
    lowerBenefit.includes('integral') ||
    lowerBenefit.includes('protección') ||
    lowerBenefit.includes('póliza') 
  ) {
    return <FaShieldAlt className="text-lightBlue text-lg" />;
  }

  // Asistencia y emergencias
  if (
    lowerBenefit.includes('24/7') ||
    lowerBenefit.includes('emergencia') ||
    lowerBenefit.includes('online') ||
    lowerBenefit.includes('permanente') ||
    lowerBenefit.includes('asistencia') ||
    lowerBenefit.includes('poliza') ||
    lowerBenefit.includes('agilidad') 
  ) {
    return <FaClock className="text-lightBlue text-lg" />;
  }

  // Descuentos y precios
  if (
    lowerBenefit.includes('descuento') ||
    lowerBenefit.includes('bonificación') ||
    lowerBenefit.includes('precio') ||
    lowerBenefit.includes('ahorro') ||
    lowerBenefit.includes('ahorras') ||
    lowerBenefit.includes('pagas') ||
    lowerBenefit.includes('accesibles') ||
    lowerBenefit.includes('bonificaciones') 
  ) {
    return <FaHandHoldingUsd className="text-lightBlue text-lg" />;
  }

  // Atención personalizada
  if (
    lowerBenefit.includes('personalizada') ||
    lowerBenefit.includes('exclusiva') ||
    lowerBenefit.includes('profesionales') ||
    lowerBenefit.includes('dedicada') ||
    lowerBenefit.includes('red') ||
    lowerBenefit.includes('respuesta')
  ) {
    return <FaUserCheck className="text-lightBlue text-lg" />;
  }

  // Vehículos y talleres
  if (
    lowerBenefit.includes('taller') ||
    lowerBenefit.includes('vehículo') ||
    lowerBenefit.includes('autos') ||
    lowerBenefit.includes('reparación')
  ) {
    return <FaCar className="text-lightBlue text-lg" />;
  }

  if (
    lowerBenefit.includes('motos') ||
    lowerBenefit.includes('monopatin') ||
    lowerBenefit.includes('Cobertura bici') ||
    lowerBenefit.includes('patineta')
  ) {
    return <FaBicycle className="text-lightBlue text-lg" />;
  }
  // Medicina y salud
  if (
    lowerBenefit.includes('médica') ||
    lowerBenefit.includes('atención médica') ||
    lowerBenefit.includes('salud') ||
    lowerBenefit.includes('medicina')
  ) {
    return <FaHospital className="text-lightBlue text-lg" />;
  }

  // Asistencia legal
  if (
    lowerBenefit.includes('legal') ||
    lowerBenefit.includes('abogado') ||
    lowerBenefit.includes('jurídica') ||
    lowerBenefit.includes('higiene')
  ) {
    return <FaBriefcase className="text-lightBlue text-lg" />;
  }

  // Ícono predeterminado
  return <FaPhoneAlt className="text-lightBlue text-lg" />;
};

export const PartnerBenefitsModal = ({ partner, onClose, onNext, onPrevious, isFirst, isLast }) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 2000);

    return () => clearInterval(pulseTimer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bgDarkBlue/90 overflow-y-auto">
      <div className="relative w-full max-w-md md:max-w-lg mx-4 p-[2em] bg-bgDarkBlue rounded-lg shadow-lg border border-blueGray/20">
        <div className="flex justify-between items-center bg-lightBlue p-2 rounded-t-lg">
          <img
            src={partner.logo}
            alt={`Logo of ${partner.name}`}
            className="p-[.5em] h-12 w-42 object-contain"
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
            className={`font-semibold hover:underline tracking-wide animate-bounce-once text-lg ${isPulsing ? "animate-pulse text-Black" : "text-bgDarkBlue"
              }`}
            aria-label="Contact us on WhatsApp"
          >
            Hablemos por WhatsApp
            <FaWhatsapp
              className={`inline-block ml-2 text-lg ${isPulsing ? "animate-pulse text-Black" : "text-bgDarkBlue"
                }`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};