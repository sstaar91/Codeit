import { useSearchParams } from 'react-router-dom';
import { makePageArr } from '../../utils/pagenation';
import css from './PageNation.module.scss';
import useToast from '../../hooks/useToast';

interface Props {
  total: number;
  limit: string;
  offset: string;
}

const PageNation = ({ total, limit, offset }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setToast = useToast();

  const handlePageBtn = (number: number) => {
    if (number === 0) return setToast('가장 첫번째 페이지입니다');
    if (number === totalPageNum + 1)
      return setToast('가장 마지막 페이지입니다');
    searchParams.set('offset', '' + (number - 1) * Number(limit));
    setSearchParams(searchParams);
  };

  const totalPageNum = Math.ceil(total / Number(limit));
  const currentPage = +offset / +limit + 1;
  const pageArr = makePageArr(totalPageNum, currentPage);

  return (
    <div className={css.pageNationBox}>
      <button
        className={css.pageBtn}
        onClick={() => handlePageBtn(currentPage - 1)}
      >{`<`}</button>
      {pageArr.map(num => {
        return (
          <button
            key={num}
            className={`${css.pageBtn} ${
              currentPage === num ? css.current : ''
            }`}
            onClick={() => handlePageBtn(num)}
          >
            {num}
          </button>
        );
      })}
      <button
        className={css.pageBtn}
        onClick={() => handlePageBtn(currentPage + 1)}
      >{`>`}</button>
    </div>
  );
};

export default PageNation;
