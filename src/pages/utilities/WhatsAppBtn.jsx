import { FaWhatsapp } from "react-icons/fa"

export const WhatsAppBtn = () => (
  <a
    className="fixed z-40 bottom-6 right-6 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    href="https://wa.me/5491156999580"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact us on WhatsApp"
  >
    <FaWhatsapp size={30} />
  </a>
)
