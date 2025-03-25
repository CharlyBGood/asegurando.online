import React, { useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { Contact } from "./Contact";

const maschio3 = "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1741819729/maschio3_onrbup.png";
const logoSolo = "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1741819729/logoSolo_qvxfcr.png";

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
    <nav className="bg-bgDarkBlue sticky top-0 z-50 w-full opacity-90 p-2">
      <div className="container mx-auto px-2">
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
              alt="Maschio y Asociados logo"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleContactModal}
              className="cursor-pointer text-4xl hover:text-lightBlue focus:outline-none"
              aria-label="Toggle menu"
            >
              <BiSolidContact />
            </button>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#" onClick={toggleContactModal}>
              CONTACTO
            </NavLink>
          </div>
        </div>
      </div>
      {isContactModalOpen && (
        <Contact openCloseModal={toggleContactModal} />
      )}
    </nav>
  );
};

export default Navigation;