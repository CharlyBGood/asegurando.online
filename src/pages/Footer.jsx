// Footer.jsx
import React from 'react';
import '../stylesheets/Footer.css';
import whatsapp from '../assets/logos/wasap.png';
import superintendencia from '../assets/prefooter.png';
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {

  return (
    <>
      <div className="img-prefooter">
        <img src={superintendencia} alt="Super intendencia de seguros de la Nación" />
      </div>
      <a className="wsp-link" href="https://wa.me/5491156999580" target="_blank">
        <img className="wsp-icon" src={whatsapp} alt="logo de WhatsApp" />
      </a>
      <footer>
        <div className="footer-span">
          <span>Buenos Aires, Argentina</span>
          <span>(011) 5699-9580</span>
          <a
            href="https://www.linkedin.com/in/maschio-seguros-08bb0414/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/maschioyasociados" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/maschioasoc/" target="_blank">
            <FaInstagram />
          </a>
          <a href="mailto:estarsiempreseguros@gmail.com">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </footer>
    </>

  );
};

export default Footer;