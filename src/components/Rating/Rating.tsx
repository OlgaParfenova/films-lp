import { FC } from 'react';
import classnames from 'classnames';
import RatingIcon from '../../assets/icons/Star.svg';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';

export const Rating: FC<RatingProps> = ({ rating, className, ...props }) => {
  return (
    <div className={classnames(styles['rating'], className)} {...props}>
      <RatingIcon className={styles['rating-icon']} alt='Rating Icon' />
      {parseFloat((Math.round(rating * 10) / 10).toFixed(1))}
    </div>
  );
};
