import whatsapp from '../assets/logos/wasap.png';
import superintendencia from '../assets/prefooter.png';
import SocialMedia from './utilities/SocialMedia';
import SMLinks from './utilities/SMLinks'


const Footer = () => {
  return (
    <>
      <a className="wsp-link" href="https://wa.me/5491156999580" target="_blank">
        <img className="wsp-icon" src={whatsapp} alt="logo de WhatsApp" />
      </a>
      <footer className='absolute bottom-0 w-full'>
        <div className="img-prefooter">
          <img src={superintendencia} alt="Super intendencia de seguros de la Nación" />
        </div>
        <div className='w-full flex justify-evenly p-3 items-center bg-bgDarkBlue p-3 '>
          <span>Buenos Aires, Argentina</span>
          <span>(011) 5699-9580</span>
          {
            SMLinks.map((link, index) => {
              return (
                <SocialMedia
                  key={index}
                  url={link.url}
                  icon={link.icon}
                />
              )
            })
          }
        </div>
      </footer>
    </>

  );
};

export default Footer;