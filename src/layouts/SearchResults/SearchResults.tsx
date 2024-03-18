import { Paragraph, SearchResultsButton } from '../../components';
import { Paper } from '../Paper';
import styles from './SearchResults.module.css';

export const SearchResults = () => {
  return (
    <div className={styles['search-results']}>
      <Paper className={styles['search-results__paper']}>
        <Paragraph size='m' className={styles['search-results__title']}>
          Search Results
        </Paragraph>
        <SearchResultsButton title='Test' number={35} />
        <SearchResultsButton title='Test 2' number={45} />
        <SearchResultsButton title='Test 3' number={5005} />
      </Paper>
    </div>
  );
};
