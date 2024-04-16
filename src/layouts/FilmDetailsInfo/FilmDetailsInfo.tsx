import { FC, useState } from 'react';
import {
  Button,
  Paragraph,
  Rating,
  Title,
  YouTubePlayer,
} from '../../components';
import { FilmDetailsInfoProps } from './FilmDetailsInfo.props';
import { useGetFilmTrailersQuery } from '../../API/filmTrailersApi/getFilmTrailersEndpoint';
import { Video } from '../../API/filmTrailersApi/getFilmTrailersEndpoint/models';
import styles from './FilmDetailsInfo.module.css';

export const FilmDetailsInfo: FC<FilmDetailsInfoProps> = ({
  filmTitle,
  rating,
  length,
  genres,
  year,
  tagline,
  storyline,
  poster,
  filmId,
  ...props
}) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const releaseYear = year.slice(0, 4);
  const { data: filmTrailersData } = useGetFilmTrailersQuery(filmId);
  const trailers =
    filmTrailersData?.results.filter(
      (trailer: Video) => trailer.type === 'Trailer'
    ) || [];
  const teasers =
    filmTrailersData?.results.filter(
      (trailer: Video) => trailer.type === 'Teaser'
    ) || [];
  const firstTrailerKey =
    trailers.length > 0
      ? trailers[0].key
      : teasers.length > 0
      ? teasers[0].key
      : '';

  const handleWatchTrailerClick = () => {
    if (firstTrailerKey) {
      setShowPlayer((state) => !state);
    } else {
      setShowPlayer(false);
    }
  };

  return (
    <div className={styles['film-details-info__container']} {...props}>
      <div className={styles['film-details-info__container__wrapper']}>
        <div className={styles['film-details-info']}>
          <div className={styles['film-details-info__title']}>
            <Title className={styles['film-details__title']}>
              {filmTitle}
            </Title>
          </div>
          <div className={styles['film-details-info__rating-length-container']}>
            <div className={styles['film-details-info__rating']}>
              <Rating rating={rating} />
            </div>
            <div className={styles['film-details-info__length']}>
              {length} min
            </div>
            {firstTrailerKey ? (
              <Button capitalised onClick={handleWatchTrailerClick}>
                Watch Trailer
              </Button>
            ) : null}
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
          <div className={styles['film-details-info__item']}>
            <Paragraph capitals size='l' weight='600'>
              Year
            </Paragraph>
            <Paragraph
              size='m'
              color='gray'
              className={styles['film-details-info__descr']}>
              {releaseYear}
            </Paragraph>
          </div>
          {tagline ? (
            <div className={styles['film-details-info__item']}>
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
          ) : null}
          {storyline ? (
            <div className={styles['film-details-info__item']}>
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
          ) : null}
        </div>
        <div
          className={styles['film-details-info__poster']}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})`,
          }}></div>
      </div>
      {showPlayer ? (
        <YouTubePlayer
          videoId={firstTrailerKey}
          className={styles['film-details-info__player']}
        />
      ) : null}
    </div>
  );
};
