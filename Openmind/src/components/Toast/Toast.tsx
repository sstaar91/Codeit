import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';

import { toastList } from '../../atoms/toast';
import css from './Toast.module.scss';

interface Props {
  children: React.ReactNode;
}

const ToastPortal = ({ children }: Props) => {
  const toastRoot = document.getElementById('toast');
  if (!toastRoot) return null;

  return ReactDOM.createPortal(children, toastRoot);
};

const Toast = () => {
  const [toastComments, setToastComments] = useRecoilState(toastList);

  useEffect(() => {
    const time = setTimeout(() => {
      if (toastComments.length === 0) return;
      const newArr = [...toastComments];
      newArr.shift();
      setToastComments(newArr);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [toastComments]);

  console.log(toastComments);

  return (
    <ToastPortal>
      {toastComments.map(list => {
        return (
          <div className={css.container} key={list.id}>
            <div className={css.toastBox}>{list.text}</div>
          </div>
        );
      })}
    </ToastPortal>
  );
};

export default Toast;
