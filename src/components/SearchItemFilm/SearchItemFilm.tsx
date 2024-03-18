import { FC } from 'react';
import classNames from 'classnames';
import { Paper } from '../../layouts';
import { Paragraph } from '../Paragraph';
import { SearchItemFilmProps } from './SearchItemFilm.props';
import styles from './SearchItemFilm.module.css';

export const SearchItemFilm: FC<SearchItemFilmProps> = ({
  title,
  date,
  overview,
  picture,
  className,
  ...props
}) => {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const truncateOverview = (text: string) => {
    if (text.length > 250) return text.slice(0, 250) + '...';
    return text;
  };

  const truncatedOverview = truncateOverview(overview);

  return (
    <Paper
      className={classNames(styles['search-item-film__paper'], className)}
      {...props}>
      {picture.length ? (
        <div
          className={styles['search-item-film__picture']}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${picture})`,
          }}></div>
      ) : (
        <div
          className={styles['search-item-film__picture']}
          style={{
            backgroundImage: 'url(/img/emptyPic.png)',
          }}></div>
      )}
      <div className={styles['search-item-film__info']}>
        <Paragraph className={styles['info__title']} size='m' weight='600'>
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
