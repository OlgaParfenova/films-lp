import { NavLink } from 'react-router-dom';
import { Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import Logo from '../../assets/icons/Logo.svg';
import { routes } from '../../router/routes';
import { NavbarButton } from '../NavbarButton';
import { toggleTheme } from '../../API/themeSlice';
import { useTypedSelector } from '../../API/hooks';
import styles from './DesktopNav.module.css';

export const DesktopNav = () => {
  const darkMode = useTypedSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleThemeChange = (checked: boolean) => {
    dispatch(toggleTheme(checked));
  };

  return (
    <div className={styles['desktopNav']}>
      <div className={styles['desktopNav__content']}>
        <div className={styles['desktopNav__logo']}>
          <NavLink to={routes.mainPageURL}>
            <Logo />
          </NavLink>
        </div>
        <div className={styles['desktopNav__buttons-container']}>
          <NavbarButton to={routes.filmsPageURL} text='Films' />
          <NavbarButton to={routes.tvShowsPageURL} text='TV Shows' />
          <NavbarButton to={routes.peoplePageURL} text='People' />
          <div className={styles['desktopNav__buttons-container__divider']}>|</div>
          <NavbarButton
            to={routes.loginPageURL}
            text='Login'
            capitalized={true}
          />
          <NavbarButton
            to={routes.registerPageURL}
            text='Register'
            capitalized={true}
          />
          <Switch
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            checked={darkMode}
            onChange={handleThemeChange}
          />
        </div>
      </div>
    </div>
  );
};
