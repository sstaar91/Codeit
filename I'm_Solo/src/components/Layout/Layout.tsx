import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Toast from '../Toast';

import css from './Layout.module.scss';

const Layout = () => {
  return (
    <main className={css.container}>
      <RecoilRoot>
        <Outlet />
        <Toast />
      </RecoilRoot>
    </main>
  );
};

export default Layout;
