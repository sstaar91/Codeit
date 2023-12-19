import css from './Cta.module.scss';

interface Props {
  title: string;
  color: string;
  handleButton?: () => void;
}

const Cta = ({ title, color, handleButton }: Props) => {
  return (
    <button className={`${css.button} ${css[color]}`} onClick={handleButton}>
      {title}
    </button>
  );
};

export default Cta;
