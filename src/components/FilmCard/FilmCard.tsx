import { FC } from 'react';
import { Paragraph } from '../Paragraph';
import { FilmCardProps } from './FilmCard.props';
import styles from './FilmCard.module.css';
import { Rating } from '../Rating';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';

export const FilmCard: FC<FilmCardProps> = ({
  title,
  posterURL,
  rating,
  id,
}) => {
  const navigate = useNavigate();
  const handleFilmDetailsClick = () => {
    navigate(routes.filmPageURL(id));
  };

  return (
    <div className={styles['card']}>
      <div className={styles['card__poster']} onClick={handleFilmDetailsClick}>
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
          onClick={handleFilmDetailsClick}>
          {title}
        </Paragraph>
      ) : (
        <Paragraph
          size='xs'
          color='primary'
          className={styles['card__title']}
          onClick={handleFilmDetailsClick}>
          {title}
        </Paragraph>
      )}
      <Rating rating={rating} className={styles['card__rating']} />
    </div>
  );
};
