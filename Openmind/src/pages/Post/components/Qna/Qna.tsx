import { useState } from 'react';
import ProfileImg from '../../../../components/ProfileImg';
import Icon from '../../../../components/Icon';

import { Question } from '../../../../types/qnaType';
import css from './Qna.module.scss';

const Qna = ({
  id,
  answer,
  like,
  content,
  dislike,
  subjectId,
  createdAt,
}: Question) => {
  const [reaction, setReaction] = useState('');

  return (
    <article className={css.qnaBox} key={id}>
      <label className={`${css.status} ${answer ? css.complete : css.notYet}`}>
        {answer ? '답변 완료' : '미답변'}
      </label>
      <div>
        <span className={css.date}>질문 - 2주전</span>
        <p className={css.title}>{content}</p>
      </div>
      {answer && (
        <div className={css.answerBox}>
          <ProfileImg url="" size="small" />
          <div>
            <span className={css.title}>아초는 고양이</span>
            <span className={css.date}>2주전</span>
            <p className={css.answer}>
              그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
              찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
              청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
              피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
              방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며,
              말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에
              있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은
              피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지
              것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히
              듣기만 운다.
            </p>
          </div>
        </div>
      )}

      <label className={css.line} />
      <div className={css.reactionBox}>
        <button
          className={`${css.reactionBtn} ${
            reaction === 'like' && css[reaction]
          }`}
          onClick={() => {
            setReaction('like');
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
            setReaction('dislike');
          }}
        >
          <Icon title="thumbsDown" />
          <span>싫어요 {dislike}개</span>
        </button>
      </div>
    </article>
    //   })}
    // </>
  );
};

export default Qna;
