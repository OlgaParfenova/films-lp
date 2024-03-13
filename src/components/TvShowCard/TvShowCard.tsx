import { FC } from 'react';
import { Paragraph } from '../Paragraph';
import { TvShowCardProps } from './TvShowCard.props';
import { Rating } from '../Rating';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';
import styles from './TvShowCard.module.css';

export const TvShowCard: FC<TvShowCardProps> = ({
  title,
  posterURL,
  rating,
  id,
}) => {
  const navigate = useNavigate();
  const handleTvShowDetailsClick = () => {
    navigate(routes.tvShowPageURL(id));
  };

  return (
    <div className={styles['card']}>
      <div className={styles['card__poster']} onClick={handleTvShowDetailsClick}>
        <img src={posterURL} alt='poster' />
        <div className={styles['card__poster-overlay']}>
          <Paragraph size='xm' color='default'>
            Learn more
          </Paragraph>
        </div>
      </div>
      {title.length <= 25 ? (
        <Paragraph
          size='xm'
          color='primary'
          className={styles['card__title']}
          onClick={handleTvShowDetailsClick}>
          {title}
        </Paragraph>
      ) : (
        <Paragraph
          size='xs'
          color='primary'
          className={styles['card__title']}
          onClick={handleTvShowDetailsClick}>
          {title}
        </Paragraph>
      )}
      <Rating rating={rating} className={styles['card__rating']} />
    </div>
  );
};
