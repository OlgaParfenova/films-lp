import { FC } from 'react';
import { Button, Paragraph, Rating, Title } from '../../components';
import { TvShowDetailsInfoProps } from './TvShowDetailsInfo.props';
import styles from './TvShowDetailsInfo.module.css';

export const TvShowDetailsInfo: FC<TvShowDetailsInfoProps> = ({
  data,
  ...props
}) => {
  const {
    name,
    vote_average,
    episode_run_time,
    genres,
    first_air_date,
    tagline,
    overview,
    poster_path,
    last_air_date,
    number_of_episodes,
    number_of_seasons,
    created_by,
    origin_country,
  } = data;
  const EpisodeRuntime = Number(episode_run_time[0]);

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    return newDate.toLocaleDateString('en-GB', options);
  };

  return (
    <div className={styles['tvshow-details-info__container']} {...props}>
      <div className={styles['tvshow-details-info']}>
        <div className={styles['tvshow-details-info__title']}>
          <Title>{name}</Title>
        </div>
        <div className={styles['tvshow-details-info__rating-length-container']}>
          <div className={styles['tvshow-details-info__rating']}>
            <Rating rating={vote_average} />
          </div>
          <div className={styles['tvshow-details-info__length']}>
            {EpisodeRuntime} min
          </div>
          {number_of_seasons === 1 ? (
            <div className={styles['tvshow-details-info__length']}>
              {number_of_seasons} season
            </div>
          ) : (
            <div className={styles['tvshow-details-info__length']}>
              {number_of_seasons} seasons
            </div>
          )}
          <div className={styles['tvshow-details-info__length']}>
            {number_of_episodes} episodes
          </div>
          <Button capitalised>Watch Trailer</Button>
        </div>
        <div className={styles['tvshow-details-info__genres']}>
          {genres.map((genre) => {
            return (
              <Paragraph key={genre.id} size='m' color='gray'>
                {genre.name}
              </Paragraph>
            );
          })}
        </div>
        {created_by.length ? (
          <div className={styles['tvshow-details-info__item']}>
            <Paragraph capitals size='l' weight='600'>
              Created By
            </Paragraph>
            <div className={styles['tvshow-details-info__line']}>
              {created_by.map((creator) => (
                <Paragraph
                  key={creator.id}
                  size='m'
                  color='gray'
                  className={styles['tvshow-details-info__line__paragraph']}>
                  {creator.name}
                </Paragraph>
              ))}
            </div>
          </div>
        ) : null}
        <div className={styles['tvshow-details-info__item']}>
          <Paragraph capitals size='l' weight='600'>
            First Air Date
          </Paragraph>
          <Paragraph
            size='m'
            color='gray'
            className={styles['tvshow-details-info__descr']}>
            {formatDate(first_air_date)}
          </Paragraph>
        </div>
        {last_air_date ? (
          <div className={styles['tvshow-details-info__item']}>
            <Paragraph capitals size='l' weight='600'>
              Last Air Date
            </Paragraph>
            <Paragraph
              size='m'
              color='gray'
              className={styles['tvshow-details-info__descr']}>
              {formatDate(last_air_date)}
            </Paragraph>
          </div>
        ) : null}
        {origin_country.length ? (
          <div className={styles['tvshow-details-info__item']}>
            <Paragraph capitals size='l' weight='600'>
              Origin Country
            </Paragraph>
            <div className={styles['tvshow-details-info__line']}>
              {origin_country.map((country, id) => (
                <Paragraph
                  key={id}
                  size='m'
                  color='gray'
                  className={styles['tvshow-details-info__line__paragraph']}>
                  {country}
                </Paragraph>
              ))}
            </div>
          </div>
        ) : null}
        {tagline ? (
          <div className={styles['tvshow-details-info__item']}>
            <Paragraph capitals size='l' weight='600'>
              Tagline
            </Paragraph>
            <Paragraph
              size='m'
              color='gray'
              className={styles['tvshow-details-info__descr']}>
              {tagline}
            </Paragraph>
          </div>
        ) : null}
        {overview ? (
          <div className={styles['tvshow-details-info__item']}>
            <Paragraph capitals size='l' weight='600'>
              Storyline
            </Paragraph>
            <Paragraph
              size='m'
              color='gray'
              className={styles['tvshow-details-info__descr']}>
              {overview}
            </Paragraph>
          </div>
        ) : null}
      </div>
      <div
        className={styles['tvshow-details-info__poster']}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
        }}></div>
    </div>
  );
};
