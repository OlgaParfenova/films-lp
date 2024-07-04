import { Link } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import styles from './MobileNav.module.css';

type Item = {
  label: string;
  href: string;
};

type MobileNavProps = {
  items: Item[];
};

export const MobileNav = ({ items }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenClassName, setisOpenClassName] = useState<boolean>(false);

  const openMenuHandler = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setIsOpen(true);

    const timer = setTimeout(() => {
      setisOpenClassName(true);
      clearInterval(timer);
    }, 10);
  };

  const closeMenuHandler = (
    event:
      | MouseEvent<HTMLButtonElement>
      | MouseEvent<HTMLAnchorElement>
      | MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setisOpenClassName(false);

    const timer = setTimeout(() => {
      setIsOpen(false);
      clearInterval(timer);
    }, 150);
  };

  const elements = items.map(({ href, label }) => {
    return (
      <li key={`${href}${label}`} className={styles['item']}>
        <Link to={href}>{label}</Link>
      </li>
    );
  });

  const popupNavPanel = (
    <>
      <div
        className={classNames([
          styles['popupPanel'],
          { [styles['openMenu']]: isOpenClassName },
        ])}>
        <button
          type='button'
          className={styles['button']}
          onClick={closeMenuHandler}>
          Закрыть
        </button>
        <div>
          <ul>{elements}</ul>
        </div>
      </div>
      <div
        className={classNames([
          styles['overlay'],
          { [styles['openMenu']]: isOpenClassName },
        ])}
        onClick={closeMenuHandler}></div>
    </>
  );

  return (
    <>
      <div className={styles['navPanel']}>
        <button
          type='button'
          className={styles['button']}
          onClick={openMenuHandler}>
          Открыть
        </button>
      </div>
      {isOpen && createPortal(popupNavPanel, document.body)}
    </>
  );
};
