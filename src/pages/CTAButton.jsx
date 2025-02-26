import { COLORS } from '../theme';

const CTAButton = ({ text, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: COLORS.accent,
        color: COLORS.white,
        border: 'none',
        borderRadius: '20px',
        padding: '10px 30px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#3a9ecb'}
      onMouseOut={(e) => e.target.style.backgroundColor = COLORS.accent}
    >
      {text}
    </button>
  );
};

export default CTAButton;