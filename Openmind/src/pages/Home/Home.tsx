import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAxios } from '../../utils/axiosInstance';
import useToast from '../../hooks/useToast';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Cta from '../../components/Cta';

import css from './Home.module.scss';

const Home = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const setToast = useToast();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handelLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName === '') return setToast('이름을 입력해주세요');

    postAxios('subjects/', { name: userName }).then((res: any) => {
      const { id, name } = res.data;
      if (id) {
        localStorage.setItem('userId', id);
        setToast(`환영합니다 ${name}님!`);
        navigate(`/post/${id}`);
      }
      setUserName('');
    });
  };

  return (
    <section className={css.container}>
      <Logo size="large" />
      <div className={css.btnPosition}>
        <Cta
          title="질문하러 가기 💕"
          color="soft"
          handleButton={() => {
            navigate('/list?offset=0&sort=name');
          }}
        />
      </div>
      <form className={css.inputForm} onSubmit={handelLogin}>
        <Input handleInput={handleInput} />
        <Cta title="질문 받기" color="thick" border="none" />
      </form>
    </section>
  );
};

export default Home;
