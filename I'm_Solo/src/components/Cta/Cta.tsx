import css from './Cta.module.scss';

interface Props {
  title: string;
  color: string;
  type?: string;
  border?: string;
  isActive?: boolean;
  handleButton?: () => void;
}

const Cta = ({
  title,
  color,
  type = '',
  border = '',
  isActive = false,
  handleButton,
}: Props) => {
  return (
    <button
      className={`${css.button} ${css[color]} ${css[type]} ${css[border]} ${
        isActive ? css.active : ''
      }`}
      disabled={isActive}
      onClick={handleButton}
    >
      {title}
    </button>
  );
};

export default Cta;
