import { FC } from 'react';
import { Paragraph, SearchResultsButton } from '../../components';
import { Paper } from '../Paper';
import { SearchResultsProps } from './SearchResults.props';
import styles from './SearchResults.module.css';
import classNames from 'classnames';

export const SearchResults: FC<SearchResultsProps> = ({
  films_number,
  tvShows_number,
  people_number,
  onFilmsClick,
  onPeopleClick,
  onTvShowsClick,
  className,
  focusedButton,
  ...props
}) => {
  return (
    <div className={classNames(styles['search-results'], className)} {...props}>
      <Paper className={styles['search-results__paper']}>
        <Paragraph size='m' className={styles['search-results__title']}>
          Search Results
        </Paragraph>
        <SearchResultsButton
          title='Films'
          number={films_number}
          onClick={onFilmsClick}
          isFocused={focusedButton === 'films'}
        />
        <SearchResultsButton
          title='TV Shows'
          number={tvShows_number}
          onClick={onTvShowsClick}
          isFocused={focusedButton === 'tvShows'}
        />
        <SearchResultsButton
          title='People'
          number={people_number}
          onClick={onPeopleClick}
          isFocused={focusedButton === 'people'}
        />
      </Paper>
    </div>
  );
};
