import { FC } from 'react';
import { Paragraph } from '../../components';
import { Paper } from '../Paper';
import { ReviewProps } from './Review.props';
import styles from './Review.module.css';

export const Review: FC<ReviewProps> = ({
  reviewName,
  reviewDate,
  reviewText,
}) => {
  const date = reviewDate.slice(0, 10);
  return (
    <Paper className={styles['review']}>
      <div className={styles['review__title']}>
        <Paragraph capitals size='l' weight='600'>
          {reviewName}
        </Paragraph>
        <Paragraph capitals size='l' weight='600'>
          {date}
        </Paragraph>
      </div>
      <Paragraph size='m' color='gray' className={styles['review__descr']}>
        {reviewText}
      </Paragraph>
    </Paper>
  );
};
