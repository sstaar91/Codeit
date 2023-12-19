import { makePageArr } from '../../utils/pagenation';
import css from './PageNation.module.scss';

interface Props {
  total: number;
}

const PageNation = ({ total }: Props) => {
  const PAGE_LIMIT = 5;
  const pageArr = makePageArr(total);

  return (
    <div className={css.pageNationBox}>
      <button className={css.pageBtn}>{`<`}</button>
      {pageArr.map(num => {
        return (
          <button key={num} className={css.pageBtn}>
            {num}
          </button>
        );
      })}
      <button className={css.pageBtn}>{`>`}</button>
    </div>
  );
};

export default PageNation;
