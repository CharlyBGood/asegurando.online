import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export const WhatsAppBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const pulseTimer = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseTimer);
    };
  }, []);

  return (
    <a
      className={`fixed z-40 bottom-[4em] sm:bottom-10 right-2 sm:right-6 bg-[#25D366] hover:bg-[#20bd5a] text-blueGray p-2 sm:p-3 rounded-full shadow-lg transition-all duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${
        isPulsing ? "scale-110 shadow-xl" : "scale-100 shadow-lg"
      }`}
      href="https://wa.me/5491156999580"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-lg sm:text-xl" />
    </a>
  );
};