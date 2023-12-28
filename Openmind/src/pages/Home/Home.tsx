import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAxios } from '../../utils/axiosInstance';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Cta from '../../components/Cta';

import css from './Home.module.scss';
import Toast from '../../components/Toast';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [toastList, setToastList] = useState<{ id: number; text: string }[]>(
    [],
  );
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      if (toastList.length === 0) return;
      const newArr = [...toastList];
      newArr.shift();
      setToastList(newArr);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [toastList]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handelLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName === '')
      return setToastList(prev => [
        ...prev,
        { id: toastList.length, text: '이름을 입력해주세요' },
      ]);

    postAxios('subjects/', { name: userName }).then((res: any) => {
      const { id } = res.data;
      if (id) {
        localStorage.setItem('userId', id);
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
      {toastList.map(list => {
        return <Toast key={list.id} text={list.text} />;
      })}
    </section>
  );
};

export default Home;
