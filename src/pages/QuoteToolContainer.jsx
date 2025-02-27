import { useState, useEffect } from 'react';
import QuoteModal from './QuoteModal';
import '../stylesheets/QuoteToolContainer.css';

const QuoteToolContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(500);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== 'https://ecommerce.atmseguros.com.ar') return;

      if (event.data.type === 'RESIZE') {
        setIframeHeight(event.data.height);
      }

      if (event.data.type === 'QUOTE_COMPLETED') {
        console.log('Quote completed:', event.data.policyDetails);
        closeModal();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="quote-tool-container bg-bgDarkBlue text-blueGray w-full">
      <div className="quote-tool-header">
        <h2>Cotizá tu seguro de vehículo con ATM</h2>
        <p>Elegí la opción que más se ajuste a tus necesidades.</p>
        <button onClick={openModal}>Abrir herramienta de cotización</button>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          src="https://ecommerce.atmseguros.com.ar/"
          title="Insurance Quote Tool"
          width="100%"
          height={`${iframeHeight}px`}
          frameBorder="0"
          allow="payment"
        />
      </QuoteModal>
    </div>
  );
};

export default QuoteToolContainer;