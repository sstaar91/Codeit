import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';

import Cta from '../../components/Cta';
import Icon from '../../components/Icon';
import Logo from '../../components/Logo';
import ProfileImg from '../../components/ProfileImg';
import Qna from './components/Qna';
import Modal from '../../components/Modal';

import { Question } from '../../types/qnaType';
import css from './Post.module.scss';
import { deleteAxios } from '../../utils/axiosInstance';

const Post = () => {
  const params = useParams();
  const navigate = useNavigate();
  const isLoggined = localStorage.getItem('userId') === params.id;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [qnaMenuId, setQnaMenuId] = useState(0);

  const [subject] = useGetData(`/subjects/${params.id}/`);
  const [data, refetch, loading] = useGetData(
    `/subjects/${params.id}/questions/`,
  );

  const deleteUser = () => {
    deleteAxios(`/subjects/${params.id}/`).then(res => {
      if (res.status === 204) {
        localStorage.removeItem('userId');
        navigate('/');
      }
    });
  };

  if (loading) return <section>잠시 기다려주세요</section>;

  const questionCount = data?.count;
  const questionList: Question[] = data?.results;

  return (
    <section className={css.container}>
      <Logo size="medium" path="/list?offset=0&sort=name" />
      <ProfileImg url={subject.imageSource} size="large" />
      <span className={css.profileName}>{subject.name}</span>
      <div className={css.shareBox}>
        {SHARE_LIST.map(list => {
          return (
            <button key={list.id} className={css.shareBtn}>
              <Icon title={list.title} />
            </button>
          );
        })}
        {isLoggined && (
          <Cta
            title="탈퇴하기"
            color="thick"
            type="floating"
            handleButton={deleteUser}
          />
        )}
      </div>
      <div className={css.questionWrap}>
        <span className={css.questionNum}>
          <Icon title="comment" />
          {`${
            questionCount === 0
              ? '아직 질문이 없습니다'
              : `${questionCount}개의 질문이 있습니다`
          }`}
        </span>
        {questionList.length === 0 ? (
          <div className={css.empty}>
            <Icon title="empty" />
          </div>
        ) : (
          questionList.map((question: Question) => {
            return (
              <Qna
                key={question.id}
                refetch={refetch}
                subjectImage={subject.imageSource}
                subjectName={subject.name}
                qnaMenuId={qnaMenuId}
                setQnaMenuId={setQnaMenuId}
                {...question}
              />
            );
          })
        )}
      </div>
      {!isLoggined && (
        <div className={css.btnPosition}>
          <Cta
            title="질문 작성하기"
            color="thick"
            type="floating"
            handleButton={() => {
              setIsOpenModal(prev => !prev);
            }}
          />
        </div>
      )}
      {isOpenModal && (
        <Modal
          setIsOpenModal={setIsOpenModal}
          refetch={refetch}
          subject={subject}
        />
      )}
    </section>
  );
};

export default Post;

const SHARE_LIST = [
  { id: 1, title: 'share' },
  { id: 2, title: 'kakao' },
  { id: 3, title: 'facebook' },
];
