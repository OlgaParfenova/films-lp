import { Link, NavLink } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { MobileNavProps } from './MobileNav.props';
import Logo from '../../assets/icons/Logo.svg';
import { routes } from '../../router/routes';
import { useTypedSelector } from '../../API/hooks';
import { toggleTheme } from '../../API/themeSlice';
import { Switch } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import styles from './MobileNav.module.css';

export const MobileNav = ({ items }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenClassName, setisOpenClassName] = useState<boolean>(false);

  const darkMode = useTypedSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleThemeChange = (checked: boolean) => {
    dispatch(toggleTheme(checked));
  };

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
          CLOSE
        </button>
        <div>
          <ul>{elements}</ul>
        </div>
        <Switch
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
          checked={darkMode}
          onChange={handleThemeChange}
          className={styles['switch']}
        />
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
      <div className={styles['mobileNav']}>
        <div className={styles['mobileNav__logo']}>
          <NavLink to={routes.mainPageURL}>
            <Logo />
          </NavLink>
        </div>
        <div className={styles['navPanel']}>
          <button
            type='button'
            className={styles['button']}
            onClick={openMenuHandler}>
            MENU
          </button>
        </div>
      </div>
      {isOpen && createPortal(popupNavPanel, document.body)}
    </>
  );
};
