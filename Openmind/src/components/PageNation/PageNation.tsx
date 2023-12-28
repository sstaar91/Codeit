import { useSearchParams } from 'react-router-dom';
import { makePageArr } from '../../utils/pagenation';
import css from './PageNation.module.scss';

interface Props {
  total: number;
  limit: string;
  offset: string;
}

const PageNation = ({ total, limit, offset }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageBtn = (number: number) => {
    searchParams.set('offset', '' + number * Number(limit));
    setSearchParams(searchParams);
  };

  const PAGE_LIMIT = 5;
  const pageNum = Math.ceil(total / Number(limit));
  const pageArr = makePageArr(pageNum);
  const currentPage = +offset / +limit + 1;

  return (
    <div className={css.pageNationBox}>
      <button
        className={css.pageBtn}
        onClick={() => handlePageBtn(0)}
      >{`<`}</button>
      {pageArr.map(num => {
        return (
          <button
            key={num}
            className={`${css.pageBtn} ${
              currentPage === num ? css.current : ''
            }`}
            onClick={() => handlePageBtn(num - 1)}
          >
            {num}
          </button>
        );
      })}
      <button
        className={css.pageBtn}
        onClick={() => handlePageBtn(Number(pageArr.length) - 1)}
      >{`>`}</button>
    </div>
  );
};

export default PageNation;
