import whatsapp from '../assets/logos/wasap.png';
import SocialMedia from './utilities/SocialMedia';
import SMLinks from './utilities/SMLinks'

const superintendencia = "https://res.cloudinary.com/dr8pwzxzn/image/upload/v1741819684/prefooter_cr0pej.png"

const Footer = () => {
  return (
    <>
      <footer className='bottom-0 w-full'>
        <div className="img-prefooter">
          <img src={superintendencia} alt="Super intendencia de seguros de la Nación" />
        </div>
        <div className='w-full flex justify-evenly items-center bg-bgDarkBlue p-3 '>
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