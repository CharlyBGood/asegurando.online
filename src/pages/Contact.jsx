import '../stylesheets/Contact.css';

export const Contact = ({ openCloseModal }) => (

  <div
    className="modal-container-4"
    onClick={openCloseModal}
  >
    <div className="modal-content-4">
      <div className="modal-4-header">
        <h1>Contactanos</h1>
        <span className="close-4">×</span>
      </div>
      <div className="modal-display-4">
        <div className="modal-display-left">
          <img
            className="logo-column-img"
            src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1741819703/sonic_hpujie.avif"
            alt="Columna con logo de Maschio y Asociados"
          />
        </div>
        <div className="modal-display-right">
          <h3 className="ubicacion">Ubicación</h3>
          <h3>25 de Mayo 432 Piso 4*</h3>
          <h3>Ciudad Autónoma de Buenos Aires.</h3>
          <h3 className="citas">Las citas deben ser acordadas previamente.</h3>
          <h3>Lunes a Viernes de 10:00 a 17:00 hs.</h3>
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
          <button className="call-button">
            <a href="tel:+54 9 11 5699-9580">TEL . 011 5699-9580</a>
          </button>
        </div>
      </div>
    </div>
  </div>

)
