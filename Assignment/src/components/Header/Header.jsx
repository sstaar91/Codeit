import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cta from '../Cta';

import logo from '@_assets/icons/i_logo.svg';

import css from './Header.module.scss';

const Header = () => {
  const [userInfo, setUserInfo] = useState({
    id: 0,
    name: '',
    email: '',
    profileImageSource: '',
  });
  const location = useLocation();
  const navigate = useNavigate();

  const { email, profileImageSource } = userInfo;
  const isSignined = localStorage.getItem('token');

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        'https://bootcamp-api.codeit.kr/api/sample/user',
      );
      const result = await response.json();
      setUserInfo(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isSignined) {
      getUserInfo();
    }
  }, [isSignined]);

  // if (location.pathname.includes('sign')) return;

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {isSignined ? (
          <div className={css.profileBox}>
            <img
              className={css.userImg}
              src={profileImageSource}
              alt="user profile"
            />
            <span className={css.userEmail}>{email}</span>
          </div>
        ) : (
          <Cta action={() => navigate('/signin')} text="로그인" size="small" />
        )}
      </nav>
    </header>
  );
};

export default Header;
