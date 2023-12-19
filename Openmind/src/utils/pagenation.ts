export const makePageArr = (total: number) => {
  const newArr: number[] = new Array(total).fill(1).map((el, idx) => el + idx);
  return newArr;
};
