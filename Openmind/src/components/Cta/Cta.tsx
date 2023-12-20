import css from './Cta.module.scss';

interface Props {
  title: string;
  color: string;
  type?: string;
  border?: string;
  handleButton?: () => void;
}

const Cta = ({ title, color, type = '', border = '', handleButton }: Props) => {
  return (
    <button
      className={`${css.button} ${css[color]} ${css[type]} ${css[border]}`}
      onClick={handleButton}
    >
      {title}
    </button>
  );
};

export default Cta;
