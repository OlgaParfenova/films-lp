import { Button } from '../../components';
import Logo from '../../assets/icons/Logo.svg';
import { NavLink } from 'react-router-dom';
import { routes } from '../../router/routes';
import { NavbarButton } from '../NavbarButton';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar__content']}>
        <div className={styles['navbar__logo']}>
          <NavLink to={routes.filmsPageURL}>
            <Logo />
          </NavLink>
        </div>
        <div className={styles['navbar__buttons-container']}>
          <NavbarButton to={routes.filmsPageURL} text='Films' />
          <NavbarButton to={routes.tvShowsPageURL} text='TV Shows' />
          <NavbarButton to={routes.peoplePageURL} text='People' />
          <div className={styles['navbar__buttons-container__divider']}>|</div>
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
          <Button border='noBorder'>Switch</Button>
        </div>
      </div>
    </div>
  );
};
