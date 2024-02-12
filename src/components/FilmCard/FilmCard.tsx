import { FC } from 'react';
import { Paragraph } from '../Paragraph';
import { FilmCardProps } from './FilmCard.props';
import RatingIcon from '../../assets/icons/Star.svg';
import styles from './FilmCard.module.css';

export const FilmCard: FC<FilmCardProps> = ({ title, posterURL, rating }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card__poster']}>
        <img src={posterURL} alt='poster' />
        <div className={styles['card__poster-overlay']}>
          <Paragraph size='xm' color='default'>
            Узнать больше
          </Paragraph>
        </div>
      </div>
      <Paragraph size='xm' color='primary' className={styles['card__title']}>
        {title}
      </Paragraph>
      <div className={styles['card__rating']}>
        <RatingIcon className={styles['card__rating-icon']} alt='Rating Icon' />
        {rating}
      </div>
    </div>
  );
};
