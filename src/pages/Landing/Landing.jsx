import { useNavigate } from 'react-router-dom';
import Cta from '../../components/Cta';
import Content from './Content';
import css from './Landing.module.scss';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className={css.titleWrap}>
        <div className={css.titleBox}>
          <h2 className={css.mainTitle}>
            <span className={css.mainTitleAccent}>세상의 모든 정보</span>를
            <br />
            쉽게 저장하고 관리해보세요
          </h2>
          <Cta
            action={() => navigate('/signup')}
            text="링크 추가하기"
            size="large"
          />
          <img
            className={css.mainTitleImg}
            src="./images/main_content.png"
            alt="main contents"
          />
        </div>
      </section>
      <section className={css.contentWrap}>
        {CONTENT_LIST.map(list => {
          return <Content key={list.id} {...list} />;
        })}
      </section>
    </main>
  );
};

export default Landing;

const CONTENT_LIST = [
  {
    id: 1,
    frontTitle: '',
    accent: '원하는 링크',
    backTitle: '를 저장하세요',
    description:
      '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.',
    img: 'save',
  },
  {
    id: 2,
    frontTitle: '링크를 폴더로',
    accent: '관리',
    backTitle: '하세요',
    description: '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
    img: 'manage',
  },
  {
    id: 3,
    frontTitle: '저장한 링크를',
    accent: '공유',
    backTitle: '하세요',
    description:
      '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
    img: 'share',
  },
  {
    id: 4,
    frontTitle: '저장한 링크를',
    accent: '검색',
    backTitle: '하세요',
    description: '중요한 정보들을 검색으로 쉽게 찾아보세요.',
    img: 'search',
  },
];
