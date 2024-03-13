import { FC } from 'react';
import classNames from 'classnames';
import { PaperProps } from './Paper.props';
import styles from './Paper.module.css';

export const Paper: FC<PaperProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles['paper'], className)}>{children}</div>
  );
};
