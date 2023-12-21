import { makePageArr } from '../../utils/pagenation';
import css from './PageNation.module.scss';

interface Props {
  total: number;
  limit: string;
}

const PageNation = ({ total, limit }: Props) => {
  const PAGE_LIMIT = 5;
  const pageNum = Math.ceil(total / Number(limit));

  console.log(pageNum);
  const pageArr = makePageArr(pageNum);

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
