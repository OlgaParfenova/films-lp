import { FC } from 'react';
import classnames from 'classnames';
import { PersonCardGridProps } from './PersonCardGrid.props';
import styles from './PersonCardGrid.module.css';

export const PersonCardGrid: FC<PersonCardGridProps> = ({
  className,
  ...props
}) => {
  return <div {...props} className={classnames(styles['wrap'], className)} />;
};
