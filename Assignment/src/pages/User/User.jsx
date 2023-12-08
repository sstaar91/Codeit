import { Fragment, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import fetchPost from '../../utils/fetchPost';
import Cta from '../../components/Cta';
import css from './User.module.scss';

const User = () => {
  const INIT_STATE = {
    email: '',
    password: '',
    check: '',
  };

  const [userInfo, setUserInfo] = useState(INIT_STATE);
  const [inputStatus, setInputStatus] = useState(INIT_STATE);
  const [inputType, setInputType] = useState({
    email: 'text',
    password: 'password',
    check: 'password',
  });

  const location = useLocation();
  const navigate = useNavigate();
  const isSignin = location.pathname === '/signin';
  const inputList = isSignin ? SIGNIN_INFO : SIGNUP_INFO;

  if (localStorage.getItem('token')) return <Navigate to="/folder" />;

  const validList = {
    email:
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    password: /^(?=.*[a-z])[a-z\d]{8,}$/,
  };

  const errorMessageList = {
    empty: {
      email: '이메일을 입력해주세요',
      password: '비밀번호를 입력해주세요',
    },
    valid: {
      email: '올바른 이메일 주소가 아닙니다.',
      password: '올바른 비밀번호 형식이 아닙니다',
      check: '비밀번호가 일치하지 않습니다',
    },
  };

  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const checkInputValue = e => {
    const { name, value } = e.target;
    let checkValue = '';
    if (name === 'check') {
      if (userInfo.password !== value) {
        checkValue = 'valid';
      }
    } else {
      if (!value.trim()) {
        checkValue = 'empty';
      } else if (!validList[name].test(value)) {
        checkValue = 'valid';
      }
    }
    setInputStatus(prev => ({ ...prev, [name]: checkValue }));
  };

  const changeInputType = name => {
    const type = inputType[name] === 'password' ? 'text' : 'password';
    setInputType(prev => ({ ...prev, [name]: type }));
  };

  const signin = async (api, submitData) => {
    try {
      const result = await fetchPost(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (result.data) {
        alert('환영합니다!');
        navigate('/folder');
        localStorage.setItem('token', result.data.accessToken);
      }
    } catch (e) {
      alert('다시 시도해주세요!');
      setUserInfo(INIT_STATE);
      setInputStatus(INIT_STATE);
    }
  };

  const submitUserInfo = async (e, api) => {
    e.preventDefault();

    const submitData = {
      email: userInfo.email,
      password: userInfo.password,
    };

    if (api === 'sign-up') {
      const result = await fetchPost('check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userInfo.email }),
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        signin(api, submitData);
      }
    } else {
      signin(api, submitData);
    }
  };

  return (
    <section className={css.loginBox}>
      <Link to="/">
        <img className={css.logo} src="/icons/i_logo.svg" alt="logo" />
      </Link>
      <div className={css.questionBox}>
        <span className={css.question}>
          {isSignin ? '회원이 아니신가요?' : '이미 회원이신가요?'}
        </span>
        <Link className={css.singupLink} to={isSignin ? '/signup' : '/signin'}>
          {isSignin ? '회원가입 하기' : '로그인 하기'}
        </Link>
      </div>
      <form className={css.loginForm}>
        {inputList.map(({ id, title, name }) => {
          return (
            <Fragment key={id}>
              <label className={css.inputTitle}>{title}</label>
              <div className={css.passwordBox}>
                <input
                  className={`${css.userInput} ${css[name]} ${
                    css[inputStatus[name] !== '' ? 'errorBorder' : '']
                  }`}
                  name={name}
                  type={inputType[name]}
                  placeholder={title}
                  value={userInfo[name]}
                  onChange={handleUserInfo}
                  onBlur={checkInputValue}
                />
                {title.includes('비밀번호') && (
                  <img
                    className={css.eyeOff}
                    src={`/icons/i_eye${
                      inputType[name] === 'password' ? 'Off' : 'On'
                    }.svg`}
                    alt="eye off"
                    onClick={() => changeInputType(name)}
                  />
                )}
              </div>
              {inputStatus[name] && (
                <span className={css.errorMessage}>
                  {errorMessageList[inputStatus[name]][name]}
                </span>
              )}
            </Fragment>
          );
        })}
        <Cta
          action={e => submitUserInfo(e, isSignin ? 'sign-in' : 'sign-up')}
          size="user"
          text={isSignin ? '로그인' : '회원가입'}
        />
      </form>
      <div className={css.socialBox}>
        <span className={css.socialBoxTitle}>소셜 로그인</span>
        <div className={css.iconBox}>
          {SOCIAL_ICON_LIST.map(({ id, url, title }) => {
            return (
              <a href={url} key={id}>
                <img
                  src={`/icons/i_${title}.svg`}
                  alt={`${title} Login Button`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default User;

const SIGNIN_INFO = [
  { id: 1, title: '이메일', name: 'email' },
  { id: 2, title: '비밀번호', name: 'password' },
];

const SIGNUP_INFO = [
  { id: 1, title: '이메일', name: 'email' },
  { id: 2, title: '비밀번호', name: 'password' },
  { id: 3, title: '비밀번호 확인', name: 'check' },
];

const SOCIAL_ICON_LIST = [
  { id: 1, url: 'https://www.google.com/', title: 'google' },
  { id: 2, url: 'https://www.kakaocorp.com/page/', title: 'kakao' },
];
