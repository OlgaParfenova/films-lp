import { FC } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Paper } from '../../layouts';
import { Paragraph } from '../Paragraph';
import { SearchItemFilmProps } from './SearchItemFilm.props';
import styles from './SearchItemFilm.module.css';

export const SearchItemFilm: FC<SearchItemFilmProps> = ({
  title,
  release_date,
  overview = 'No overview available.',
  poster_path,
  id,
  className,
  ...props
}) => {
  const navigate = useNavigate();
  if (!title || !release_date) return;

  const dateObject = new Date(release_date);
  const formattedDate = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const truncateOverview = (text: string) => {
    const trimmedText = text.trim();
    if (trimmedText.length === 0) return 'No overview available.';
    if (trimmedText.length > 200) return trimmedText.slice(0, 200) + '...';
    return trimmedText;
  };
  const truncatedOverview = truncateOverview(overview);

  const handleFilmClick = () => {
    navigate(`/film/${id}`);
  };

  return (
    <Paper
      className={classNames(styles['search-item-film__paper'], className)}
      {...props}>
      {poster_path ? (
        <div
          className={styles['search-item-film__picture']}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
          }}
          onClick={handleFilmClick}></div>
      ) : (
        <div
          className={styles['search-item-film__picture']}
          style={{
            backgroundImage: 'url(/img/emptyPic.png)',
          }}></div>
      )}

      <div className={styles['search-item-film__info']}>
        <Paragraph
          className={styles['info__title']}
          size='m'
          weight='600'
          onClick={handleFilmClick}>
          {title}
        </Paragraph>
        <Paragraph className={styles['info__date']} size='s' color='gray'>
          {formattedDate}
        </Paragraph>
        <Paragraph className={styles['info__outline']} size='s'>
          {truncatedOverview}
        </Paragraph>
      </div>
    </Paper>
  );
};
