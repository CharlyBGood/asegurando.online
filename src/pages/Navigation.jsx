import React, { useState } from "react";
import maschio3 from "../assets/logos/maschio3.png";
import logoSolo from "../assets/logos/logoSolo.png";
import { BiSolidContact } from "react-icons/bi";


const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    className="text-blueGray hover:text-lightBlue hover:border-b hover:border-lightBlue transition-all duration-300"
    onClick={onClick}
  >
    {children}
  </a>
);

const Navigation = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-bgDarkBlue sticky top-0 z-50 w-full opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-4">
            <img
              className="header-logo w-20 md:w-24"
              src={logoSolo}
              alt="Maschio & Asoc. Logo"
            />
            <img
              className="header-logo-name w-32 md:w-40"
              src={maschio3}
              alt="maschio y asociados logo"
            />
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleContactModal}
              className="cursor-pointer text-2xl text-lightBlue focus:outline-none"
              aria-label="Toggle menu"
            >
              <BiSolidContact />
            </button>
          </div>
          <div className="hidden lg:flex space-x-6">
            <NavLink href="#" onClick={toggleContactModal}>
              CONTACTO
            </NavLink>
          </div>
        </div>
      </div>
      {/* Contact Modal */}
      {isContactModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={toggleContactModal}
        >
          <div
            className="bg-bgDarkBlue border border-gray-700 rounded-lg p-8 w-11/12 max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-lightBlue text-4xl"
              onClick={toggleContactModal}
            >
              ×
            </button>
            <div>
              texto y contenido de CONTACTO
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;