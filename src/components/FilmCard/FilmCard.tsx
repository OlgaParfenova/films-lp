import { FC } from 'react';
import { Paragraph } from '../Paragraph';
import { FilmCardProps } from './FilmCard.props';
import styles from './FilmCard.module.css';
import { Rating } from '../Rating';

export const FilmCard: FC<FilmCardProps> = ({
  title,
  posterURL,
  rating,
  // id,
}) => {
  // console.log(id);
  return (
    <div className={styles['card']}>
      <div className={styles['card__poster']}>
        <img src={posterURL} alt='poster' />
        <div className={styles['card__poster-overlay']}>
          <Paragraph size='xm' color='default'>
            Learn more
          </Paragraph>
        </div>
      </div>
      {title.length <= 25 ? (
        <Paragraph size='xm' color='primary' className={styles['card__title']}>
          {title}
        </Paragraph>
      ) : (
        <Paragraph size='xs' color='primary' className={styles['card__title']}>
          {title}
        </Paragraph>
      )}
      <Rating rating={rating} className={styles['card__rating']} />
    </div>
  );
};
