import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAxios } from '../../utils/axiosInstance';

import Input from '../../components/Input';
import Cta from '../../components/Cta';

import logo from '../../assets/images/logo.png';
import css from './Home.module.scss';

const Home = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handelLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postAxios('subjects/', { name: userName }).then((res: any) => {
      if (res.data.id) {
        navigate('/list');
      }
    });
  };

  return (
    <section className={css.container}>
      <img className={css.logo} src={logo} alt="logo" />
      <div className={css.btnPosition}>
        <Cta title="질문하러 가기 💕" color="soft" handleButton={() => {}} />
      </div>
      <form className={css.inputForm} onSubmit={handelLogin}>
        <Input handleInput={handleInput} />
        <Cta title="질문 받기" color="thick" />
      </form>
    </section>
  );
};

export default Home;
