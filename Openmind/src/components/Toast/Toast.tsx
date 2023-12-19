import { useEffect } from 'react';
import ReactDOM from 'react-dom';

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
  useEffect(() => {}, []);

  return (
    <ToastPortal>
      <div className={css.container}>
        <div className={css.toastBox}>123</div>
      </div>
    </ToastPortal>
  );
};

export default Toast;
