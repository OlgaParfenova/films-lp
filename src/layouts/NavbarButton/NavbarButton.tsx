import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { NavbarButtonProps } from './NavbarButton.props';
import styles from './NavbarButton.module.css';

export const NavbarButton: FC<NavbarButtonProps> = ({
  text,
  capitalized,
  to,
  className,
  ...props
}) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={useMemo(
        () =>
          ({ isActive }) =>
            classNames(styles['navbar__link'], className, {
              [styles['capitalized']]: capitalized,
              [styles['active']]: isActive,
            }),
        [className, capitalized]
      )}>
      {text}
    </NavLink>
  );
};
