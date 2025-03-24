import '../stylesheets/Contact.css';
import { FaPhone } from "react-icons/fa";
import { CTAButton } from './utilities/CTAButton';

export const Contact = ({ openCloseModal }) => (
  <div className="modal-container-4">
    <div className="modal-content-4">
      <div className="modal-4-header">
        <h1>Contactanos</h1>
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
        <div className="modal-display-right">
          <h3>+54 9 11 5699-9580</h3>
          <CTAButton href="tel:+54 9 11 5699-9580">
            <FaPhone />
          </CTAButton>
          <h3>
            <a className="email" href="mailto:maschiomartin@gmail.com">
              maschiomartin@gmail.com
            </a>
          </h3>
          <img
            className="logoGold"
            src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1741819729/logoHD2_l7jags.png"
            alt="Logo de Maschio y Asociados"
          />
        </div>
      </div>
    </div>
  </div>
);