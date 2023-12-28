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

interface Toast {
  text: string;
}

const Toast = ({ text }: Toast) => {
  useEffect(() => {}, []);

  return (
    <ToastPortal>
      <div className={css.container}>
        <div className={css.toastBox}>{text}</div>
      </div>
    </ToastPortal>
  );
};

export default Toast;
