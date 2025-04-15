import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { CTAButton } from "./utilities/CTAButton";
import { useState, useEffect } from "react";

export const Contact = ({ openCloseModal }) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 3000);

    return () => clearInterval(pulseTimer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-Black"
    >
      <div className="relative w-full max-w-md md:max-w-lg mx-4 bg-bgDarkBlue rounded-lg shadow-lg border border-blueGray/20">
        {/* Header */}
        <div className="flex justify-between items-center bg-lightBlue p-4 rounded-t-lg">
          <img
            className="p-[1em] w-18 w-h-auto"
            src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1741819729/logoHD2_l7jags.png" alt="Maschio & Asoc. golden logo" />
          <h1 className="text-xl md:text-2xl font-federo text-Black">Contactanos</h1>
          <button
            onClick={openCloseModal}
            className="text-4xl text-Black hover:text-lightBlueHover cursor-pointer focus:outline-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col md:flex-row gap-6 mt-4">
          {/* Left Section */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <h3 className="text-lg font-semibold text-Golden">Ubicación</h3>
            <p className="text-blueGray">25 de Mayo 432 Piso 4*, C.A.B.A</p>
            <p className="text-blueGray">Lunes a Viernes de 10:00 a 17:00 hs.</p>
            <CTAButton href="https://goo.gl/maps/sAjkAx6bxECxoMKv5"
              className="w-32 h-[2.3em] text-sm">VER MAPA</CTAButton>

          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <h3 className="text-lg font-semibold text-Golden">Contacto</h3>
            <a
              className="text-lightBlue hover:text-lightBlueHover font-semibold"
              href="mailto:maschiomartin@gmail.com"
            >
              maschiomartin@gmail.com
            </a>
            <p className="text-blueGray">TEL.: +54 9 11 5699-9580</p>
            <CTAButton
              href="tel:+54 9 11 5699-9580"
              className="w-32 h-[2.3em] text-sm">
              <FaPhone />
            </CTAButton>
          </div>
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
          <p className="text-Black font-semibold text-[.8em]">Las citas deben ser acordadas previamente.</p>
        </div>
      </div>
    </div>
  );
};