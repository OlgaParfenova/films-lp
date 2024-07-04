import { useContext } from 'react';
import { ctx } from '../../contexts/WindowResizeProvider';
import { navbarData } from './static';
import { DesktopNav } from '../DesktopNav';
import { MobileNav } from '../MobileNav';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { breakpoint_576, breakpoint_320 } = useContext(ctx);

  return (
    <div className={styles.container}>
      {(!breakpoint_576 && !breakpoint_320) && <DesktopNav />}
      {(breakpoint_576 || breakpoint_320) && <MobileNav items={navbarData} />}
    </div>
  );
};
