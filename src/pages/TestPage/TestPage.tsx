import { FC, useContext } from 'react';
import { DesktopNav } from './innerComponents/DesktopNav';
import { MobileNav } from './innerComponents/MobileNav';
import styles from './TestPage.module.css';
import { navbarData } from './static';
import { ctx } from '../../contexts/WindowResizeProvider';

export const TestPage: FC = () => {
  const { breakpoint_576, breakpoint_320 } = useContext(ctx);
  return (
    <div className={styles.container}>
      {(!breakpoint_576 || !breakpoint_320) && (
        <DesktopNav items={navbarData} />
      )}
      {(breakpoint_576 || breakpoint_320) && <MobileNav items={navbarData} />}
    </div>
  );
};
