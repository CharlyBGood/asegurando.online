import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../stylesheets/Navigation.css';
import maschio3 from '../assets/logos/maschio3.png';
import logoSolo from '../assets/logos/logoSolo.png';

const Navigation = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  return (
    <nav className="navbar bg-bgDarkBlue">
      <div className="nav-container-1">
        <img className="header-logo" src={logoSolo} alt="Maschio & Asoc. Logo" />
        <img
          className="header-logo-name"
          src={maschio3}
          alt="maschio y asociados logo"
        />
      </div>
      <a href="#" className="navbar-container navbar_toggle">
        <span className="arrow-down">‿</span>
      </a>
      <div id="navbar-container-id" className="navbar-container nav-container-2">      
        <a
          className="contact-link text-blueGray"
          onClick={toggleContactModal}
        >
          CONTACTO
        </a>

      </div>
      {isContactModalOpen && (
        <div className="modal-overlay" onClick={toggleContactModal}>
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={toggleContactModal}>×</button>
            <h2>Contactanos</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="4"></textarea>
              </div>
              <button type="submit" className="submit-button">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;