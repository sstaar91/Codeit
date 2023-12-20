import Cta from '../../components/Cta';
import Icon from '../../components/Icon';
import Logo from '../../components/Logo';
import ProfileImg from '../../components/ProfileImg';
import Qna from './components/Qna';

import css from './Post.module.scss';

const Post = () => {
  return (
    <section className={css.container}>
      <Logo size="medium" />
      <ProfileImg url="" size="large" />
      <span className={css.profileName}>프로필 네임</span>
      <div className={css.shareBox}>
        {SHARE_LIST.map(list => {
          return (
            <button key={list.id} className={css.shareBtn}>
              <Icon title={list.title} />
            </button>
          );
        })}
      </div>
      <div className={css.questionWrap}>
        <span className={css.questionNum}>
          <Icon title="comment" />
          0개의 질문이 있습니다
        </span>
        <Qna />
        <Qna />
        <Qna />
      </div>
      <div className={css.btnPosition}>
        <Cta title="질문 작성하기" color="thick" type="floating" />
      </div>
    </section>
  );
};

export default Post;

const SHARE_LIST = [
  { id: 1, title: 'share' },
  { id: 2, title: 'kakao' },
  { id: 3, title: 'facebook' },
];
