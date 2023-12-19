import { Outlet } from 'react-router-dom';
import css from './Layout.module.scss';

const Layout = () => {
  return (
    <main className={css.container}>
      <Outlet />
    </main>
  );
};

export default Layout;
