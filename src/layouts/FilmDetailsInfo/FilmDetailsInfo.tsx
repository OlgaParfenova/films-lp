import { FC } from 'react';
import { Button, Paragraph, Rating, Title } from '../../components';
import { FilmDetailsInfoProps } from './FilmDetailsInfo.props';
import styles from './FilmDetailsInfo.module.css';

export const FilmDetailsInfo: FC<FilmDetailsInfoProps> = ({
  filmTitle,
  rating,
  length,
  genres,
  tagline,
  storyline,
  poster,
  ...props
}) => {
  return (
    <div className={styles['film-details-info__container']} {...props}>
      <div className={styles['film-details-info']}>
        <div className={styles['film-details-info__title']}>
          <Title>{filmTitle}</Title>
        </div>
        <div className={styles['film-details-info__rating-length-container']}>
          <div className={styles['film-details-info__rating']}>
            <Rating rating={rating} />
          </div>
          <div className={styles['film-details-info__length']}>
            {length} min
          </div>
          <Button capitalised>Watch Trailer</Button>
        </div>
        <div className={styles['film-details-info__genres']}>
          {genres.map((genre) => {
            return (
              <Paragraph key={genre.id} size='m' color='gray'>
                {genre.name}
              </Paragraph>
            );
          })}
        </div>
        <div className={styles['film-details-info__tagline']}>
          <Paragraph capitals size='l' weight='600'>
            Tagline
          </Paragraph>
          <Paragraph
            size='m'
            color='gray'
            className={styles['film-details-info__descr']}>
            {tagline}
          </Paragraph>
        </div>
        <div className={styles['film-details-info__storyline']}>
          <Paragraph capitals size='l' weight='600'>
            Storyline
          </Paragraph>
          <Paragraph
            size='m'
            color='gray'
            className={styles['film-details-info__descr']}>
            {storyline}
          </Paragraph>
        </div>
      </div>
      <div
        className={styles['film-details-info__poster']}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})`,
        }}></div>
    </div>
  );
};
