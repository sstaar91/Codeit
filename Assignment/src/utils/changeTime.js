export const calculateTime = date => {
  const curTime = new Date() - new Date(date);

  const minute = 1000 * 60 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (~~(curTime / year) > 1) return `${~~(curTime / year)} years ago`;
  if (~~(curTime / month) >= 12) return `1 year ago`;
  if (~~(curTime / month) > 1) return `${~~(curTime / month)} months ago`;
  if (~~(curTime / day) >= 31) return `1 month ago`;
  if (~~(curTime / day) > 1) return `${~~(curTime / day)} days ago`;
  if (~~(curTime / hour) >= 24) return `1 day ago`;
  if (~~(curTime / hour) > 1) return `${~~(curTime / day)} hours ago`;
  if (~~(curTime / minute) >= 60) return `1 hour ago`;
  if (~~(curTime / minute) >= 2) return `${~~(curTime / minute)} minute ago`;
  return `1 minute ago`;
};

export const changeDateType = date => {
  const initDate = new Date(date);

  const year = initDate.getFullYear();
  const month = initDate.getMonth() + 1;
  const day = initDate.getDate();

  return `${year}. ${month}. ${day}`;
};
