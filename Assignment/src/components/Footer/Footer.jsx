import { Link, useLocation } from 'react-router-dom';
import css from './Footer.module.scss';

const Footer = () => {
  const location = useLocation();

  // if (location.pathname.includes('sign')) return;

  return (
    <footer className={css.footer}>
      <span className={css.copyRight}>©codeit - 2023</span>
      <div className={css.linkBox}>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div className={css.iconBox}>
        {ICON_LIST.map(({ id, url, title }) => {
          return (
            <a key={id} href={url} target="_blank" rel="noreferrer">
              <img src={`./icons/i_${title}.svg`} alt={`${title} icon`} />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;

const ICON_LIST = [
  { id: 1, url: 'https://www.facebook.com/?locale=ko_KR', title: 'facebook' },
  { id: 2, url: 'https://twitter.com/home?lang=ko', title: 'x' },
  { id: 3, url: 'https://www.youtube.com/', title: 'youtube' },
  { id: 4, url: 'https://www.instagram.com/', title: 'instagram' },
];
