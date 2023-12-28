import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

import Cta from '../../components/Cta';
import Logo from '../../components/Logo';
import Icon from '../../components/Icon';
import Card from '../../components/Card';
import PageNation from '../../components/PageNation';

import { Subject } from '../../types/subjectsType';

import css from './List.module.scss';

const List = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const limit = searchParams.get('limit') || '8';
  const offset = searchParams.get('offset') || '0';
  const sort = searchParams.get('sort');

  const [data, _, loading] = useGetData(
    `/subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
  );

  const handleSortBtn = (title: string) => {
    searchParams.set('sort', title);
    searchParams.set('offset', '0');
    setSearchParams(searchParams);
  };

  const moveAnswerPage = () => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      navigate(`/post/${userId}`);
    } else {
      alert('로그인을 해주세요!');
      navigate('/');
    }
  };

  if (loading) return <section>잠시 기다려주세요</section>;

  const totalSubject = data.count;
  const subjectList = data.results || [];

  return (
    <section className={css.container}>
      <nav className={css.nav}>
        <Logo size="small" />
        <Cta title="답변하러 가기" color="soft" handleButton={moveAnswerPage} />
      </nav>
      <h2 className={css.title}>누구에게 질문할까요?</h2>
      <div
        className={css.dropdownWrap}
        onClick={() => {
          setIsOpenDropdown(prev => !prev);
        }}
      >
        <span>{sort === 'name' ? '이름순' : '최신순'}</span>
        <div className={`${isOpenDropdown ? css.open : css.close}`}>
          <Icon title="arrow" />
        </div>
        {isOpenDropdown && (
          <ul className={css.dropdownList}>
            <li className={css.list} onClick={() => handleSortBtn('name')}>
              이름순
            </li>
            <li className={css.list} onClick={() => handleSortBtn('date')}>
              최신순
            </li>
          </ul>
        )}
      </div>
      {subjectList.length === 0 && (
        <div className={css.empty}>
          <span>처음으로 질문을 받아볼까요?</span>
          <Cta
            title="처음으로"
            color="thick"
            handleButton={() => {
              navigate('/');
            }}
          />
        </div>
      )}
      <div className={css.listBox}>
        {subjectList.map((list: Subject) => {
          return <Card key={list.id} {...list} />;
        })}
      </div>
      {subjectList.length !== 0 && (
        <PageNation total={totalSubject} limit={limit} offset={offset} />
      )}
    </section>
  );
};

export default List;
