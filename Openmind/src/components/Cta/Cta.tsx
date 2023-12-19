import css from './Cta.module.scss';

interface Props {
  title: string;
  color: string;
  border?: string;
  handleButton?: () => void;
}

const Cta = ({ title, color, border = '', handleButton }: Props) => {
  return (
    <button
      className={`${css.button} ${css[color]} ${css[border]}`}
      onClick={handleButton}
    >
      {title}
    </button>
  );
};

export default Cta;
