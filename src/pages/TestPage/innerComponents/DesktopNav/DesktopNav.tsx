import { Link } from 'react-router-dom';

import styles from './DesktopNav.module.css';

type Item = {
  label: string;
  href: string;
};

type DesktopNavProps = {
  items: Item[];
};

export const DesktopNav = ({ items }: DesktopNavProps) => {
  const elements = items.map(({ href, label }) => {
    return (
      <Link to={href} key={`${href}${label}`} className={styles['item']}>
        {label}
      </Link>
    );
  });
  return <div className={styles['list']}>{elements}</div>;
};
