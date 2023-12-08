import './Cta.scss';

const Cta = ({ size, action, color = 'default', text }) => {
  return (
    <button className={`loginBtn ${size} ${color}`} onClick={action}>
      {text}
    </button>
  );
};

export default Cta;
