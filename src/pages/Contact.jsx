import '../stylesheets/Contact.css';
import { FaPhone } from "react-icons/fa";
import { CTAButton } from './utilities/CTAButton';

export const Contact = ({ openCloseModal }) => (
  <div className="modal-container-4">
    <div className="modal-content-4">
      <div className="modal-4-header">
        <h1 className="text-2xl font-federo text-Black">Contactanos</h1>
        <span className="close-4" onClick={openCloseModal}>×</span>
      </div>
      <div className="modal-display-4">
        <div className="modal-display-left">
          <h3 className="ubicacion">Ubicación</h3>
          <h3>25 de Mayo 432 Piso 4*, C.A.B.A</h3>
          <h3>Lunes a Viernes de 10:00 a 17:00 hs.</h3>
          <CTAButton href="https://goo.gl/maps/sAjkAx6bxECxoMKv5">
            VER MAPA </CTAButton>
          <h3 className="citas">Las citas deben ser acordadas previamente.</h3>
        </div>
        <img
          className="logoGold"
          src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1741819729/logoHD2_l7jags.png"
          alt="Logo de Maschio y Asociados"
        />
        <div className="modal-display-right">
          <h3 className="ubicacion">Contacto</h3>
          <p>Contactanos por email a:</p>
          <h3>
            <a className="email" href="mailto:maschiomartin@gmail.com">
              maschiomartin@gmail.com
            </a>
          </h3>
          <h3>TEL.: +54 9 11 5699-9580</h3>
          <CTAButton href="tel:+54 9 11 5699-9580">
            <FaPhone />
          </CTAButton>
        </div>
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