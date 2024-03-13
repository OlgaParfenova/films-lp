import { FC } from 'react';
import classnames from 'classnames';
import styles from './FilmCardGrid.module.css';
import { FilmCardGridProps } from './FilmCardGrid.props';

export const FilmCardGrid: FC<FilmCardGridProps> = ({
  className,
  ...props
}) => {
  return <div {...props} className={classnames(styles['wrap'], className)} />;
};
