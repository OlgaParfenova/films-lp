import { Outlet } from 'react-router-dom';
import { Navbar } from '../layouts';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={styles['outlet']}>
        <Outlet />
      </div>
    </>
  );
};
