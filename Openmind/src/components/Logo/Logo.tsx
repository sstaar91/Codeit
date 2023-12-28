import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import css from './Logo.module.scss';

interface Props {
  size: string;
  path?: string;
}

const Logo = ({ size, path = '/' }: Props) => {
  const navigate = useNavigate();

  return (
    <img
      className={`${css.logo} ${css[size]}`}
      src={logo}
      alt="logo"
      onClick={() => {
        navigate(`${path}`);
      }}
    />
  );
};

export default Logo;
