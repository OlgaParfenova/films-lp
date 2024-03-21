import { FC } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Paper } from '../../layouts';
import { Paragraph } from '../Paragraph';
import { SearchItemTvShowProps } from './SearchItemTvShow.props';
import styles from './SearchItemTvShow.module.css';

export const SearchItemTvShow: FC<SearchItemTvShowProps> = ({
  name,
  first_air_date,
  overview = 'No overview available.',
  poster_path,
  id,
  className,
  ...props
}) => {
  const navigate = useNavigate();
  if (!name || !first_air_date) return;

  const dateObject = new Date(first_air_date);
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

  const handleTvShowClick = () => {
    navigate(`/tvshow/${id}`);
  };

  return (
    <Paper
      className={classNames(styles['search-item-tvshow__paper'], className)}
      {...props}>
      {poster_path ? (
        <div
          className={styles['search-item-tvshow__picture']}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
          }}
          onClick={handleTvShowClick}></div>
      ) : (
        <div
          className={styles['search-item-tvshow__picture']}
          style={{
            backgroundImage: 'url(/img/emptyPic.png)',
          }}></div>
      )}

      <div className={styles['search-item-tvshow__info']}>
        <Paragraph
          className={styles['info__title']}
          size='m'
          weight='600'
          onClick={handleTvShowClick}>
          {name}
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
