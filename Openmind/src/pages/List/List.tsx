import Cta from '../../components/Cta';
import Logo from '../../components/Logo';
import Icon from '../../components/Icon';
import Card from '../../components/Card';
import PageNation from '../../components/PageNation';

import css from './List.module.scss';

const List = () => {
  return (
    <section className={css.container}>
      <nav className={css.nav}>
        <Logo size="list" />
        <Cta title="답변하러 가기" color="soft" handleButton={() => {}} />
      </nav>
      <h2 className={css.title}>누구에게 질문할까요?</h2>
      <div className={css.dropdownWrap}>
        <span>이름순</span>
        <Icon title="arrow" />
      </div>
      <div className={css.listBox}>
        {TEST_LIST.map(list => {
          return <Card key={list.id} {...list} />;
        })}
      </div>
      <PageNation total={10} />
    </section>
  );
};

export default List;

const TEST_LIST = [
  { id: 1, name: '13기 아추', questionCount: '0' },
  { id: 2, name: '11기 아추', questionCount: '0' },
  { id: 3, name: '10기 아추', questionCount: '0' },
  { id: 4, name: '88기 아추', questionCount: '0' },
  { id: 5, name: '아추', questionCount: '0' },
  { id: 6, name: '아추', questionCount: '0' },
  { id: 7, name: '아추', questionCount: '0' },
  { id: 8, name: '아추', questionCount: '0' },
];
