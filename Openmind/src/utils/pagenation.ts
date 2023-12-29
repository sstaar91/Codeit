export const makePageArr = (total: number, currentPage: number) => {
  const firstPageNum = Math.floor(currentPage / 6) * 5 + 1;
  const arrLength = total - firstPageNum <= 4 ? total - firstPageNum + 1 : 5;

  const newArr: number[] = new Array(arrLength)
    .fill(firstPageNum)
    .map((el, idx) => el + idx);
  return newArr;
};
