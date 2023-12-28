import { useState } from 'react';
import {
  deleteAxios,
  postAxios,
  putAxios,
} from '../../../../utils/axiosInstance';
import ProfileImg from '../../../../components/ProfileImg';
import Icon from '../../../../components/Icon';
import Textarea from '../../../../components/Textarea';

import { Question } from '../../../../types/qnaType';
import css from './Qna.module.scss';

interface Props {
  refetch: React.Dispatch<React.SetStateAction<boolean>>;
  subjectName: string;
  qnaMenuId: number;
  setQnaMenuId: React.Dispatch<React.SetStateAction<number>>;
}

const Qna = ({
  id,
  answer,
  like,
  content,
  dislike,
  subjectId,
  subjectName,
  refetch,
  qnaMenuId,
  setQnaMenuId,
}: Question & Props) => {
  const [answerContent, setAnswerContent] = useState(answer?.content || '');
  const [reaction, setReaction] = useState('');
  const [contentType, setContentType] = useState('');

  const isLoggined = localStorage.getItem('userId') === String(subjectId);
  const contentCondition =
    (isLoggined && answer && contentType === '') || (!isLoggined && answer);
  const areaCondition =
    (isLoggined && answer && contentType !== '') || (isLoggined && !answer);

  const handleDropDown = (id: number) => {
    qnaMenuId === id ? setQnaMenuId(0) : setQnaMenuId(id);
  };

  const createAnswer = () => {
    postAxios(`/questions/${id}/answers/`, {
      content: answerContent,
      isRejected: false,
    }).then(res => {
      if (res.status === 200) {
        refetch(prev => !prev);
      }
    });
  };

  const updateAnswer = () => {
    putAxios(`/answers/${answer?.id}/`, {
      content: answerContent,
      isRejected: false,
    }).then(res => {
      if (res.status === 200) {
        setContentType('');
        refetch(prev => !prev);
      }
    });
  };

  const updateReaction = (type: string) => {
    postAxios(`/questions/${id}/reaction/`, { type }).then(res => {
      if (res.status === 200) {
        setReaction(type);
        refetch(prev => !prev);
      }
    });
  };

  const deleteAnswer = () => {
    deleteAxios(`/questions/${id}/`).then(res => {
      if (res.status === 204) {
        refetch(prev => !prev);
      }
    });
  };

  return (
    <article className={css.qnaBox} key={id}>
      <div className={css.statusBox}>
        <label
          className={`${css.status} ${answer ? css.complete : css.notYet}`}
        >
          {answer ? '답변 완료' : '미답변'}
        </label>
        {isLoggined && (
          <div className={css.menuBox} onClick={() => handleDropDown(id)}>
            <Icon title="kebab" />
            {qnaMenuId === id && (
              <ul
                className={`${css.menuListBox} ${
                  qnaMenuId === id ? css.open : ''
                }`}
              >
                <li
                  className={css.list}
                  onClick={() => setContentType('modify')}
                >
                  수정하기
                </li>
                <li className={css.list} onClick={deleteAnswer}>
                  삭제하기
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      <div>
        <span className={css.date}>질문 - 2주전</span>
        <p className={css.title}>{content}</p>
      </div>
      <div className={css.answerBox}>
        <ProfileImg url="" size="small" />
        <div className={css.contentBox}>
          <span className={css.title}>{subjectName}</span>
          <span className={css.date}>2주전</span>
          {contentCondition && <p className={css.answer}>{answer.content}</p>}
          {areaCondition && (
            <Textarea
              type="answer"
              setContent={setAnswerContent}
              handleQuestion={contentType === '' ? createAnswer : updateAnswer}
              value={answerContent}
            />
          )}
          {!isLoggined && (
            <p className={css.answer}>
              {answer ? answer.content : '답변을 작성하는 중입니다'}
            </p>
          )}
        </div>
      </div>
      <label className={css.line} />
      <div className={css.reactionBox}>
        <button
          className={`${css.reactionBtn} ${
            reaction === 'like' && css[reaction]
          }`}
          onClick={() => {
            updateReaction('like');
          }}
        >
          <Icon title="thumbsUp" />
          <span>좋아요 {like}개</span>
        </button>
        <button
          className={`${css.reactionBtn} ${
            reaction === 'dislike' && css[reaction]
          }`}
          onClick={() => {
            updateReaction('dislike');
          }}
        >
          <Icon title="thumbsDown" />
          <span>싫어요 {dislike}개</span>
        </button>
      </div>
    </article>
  );
};

export default Qna;
