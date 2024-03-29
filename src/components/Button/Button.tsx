import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button: FC<ButtonProps> = ({
  border,
  fill,
  capitalised,
  textColor,
  icon,
  size,
  className,
  active,
  children,
  ...props
}) => {
  const buttonClassname = useMemo(() => {
    return classNames(
      styles['button'],
      styles[`button-${fill}`],
      styles[`button-${textColor}`],
      styles[`button-${size}`],
      className,
      {
        [styles[`button-${border}`]]: border,
        [styles['button-capitalised']]: capitalised,
        [styles['button-icon']]: icon,
        [styles['active']]: active,
      }
    );
  }, [fill, textColor, size, className, border, capitalised, icon, active]);
  return (
    <button {...props} className={buttonClassname}>
      {icon && <img src={icon} className={styles['button-icon']} />}
      {children}
    </button>
  );
};
