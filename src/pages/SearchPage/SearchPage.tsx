import { useSearchParams } from 'react-router-dom';
import { Spin } from 'antd';
import { ChangeEvent, useState } from 'react';
import { useGetSearchQuery } from '../../API/searchApi/getSearchEndpoint';
import {
  Button,
  Paragraph,
  SearchFilmList,
  SearchInput,
  SearchPersonList,
} from '../../components';
import { SearchResults } from '../../layouts';
import { FocusedButtonUnion } from '../static';
import styles from './SearchPage.module.css';

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedList, setSelectedList] = useState('films');
  const [focusedButton, setFocusedButton] = useState<FocusedButtonUnion>('');

  const searchParamsObj = Object.fromEntries(searchParams);

  const { data, isLoading } = useGetSearchQuery({
    searchParams: searchParamsObj,
  });

  const films = data?.results.filter((item) => item.media_type === 'movie');
  const tvShows = data?.results.filter((item) => item.media_type === 'tv');
  const people = data?.results.filter((item) => item.media_type === 'person');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    if (searchInput.length < 2) {
      setIsError(true);
      setIsSuccess(false);
    } else {
      setSearchParams({ query: searchInput });
      setIsError(false);
      setIsSuccess(true);
      setSelectedList('films');
      setFocusedButton('films');
    }
  };

  const handleSelectFilms = () => {
    setSelectedList('films');
    setFocusedButton('films');
  };

  const handleSelectPeople = () => {
    setSelectedList('people');
    setFocusedButton('people');
  };

  if (!data || (!data && isLoading))
    return (
      <div className={styles['search-page__container']}>
        <Spin size='large' />
      </div>
    );

  return (
    <div className={styles['search-page__background']}>
      <div className={styles['search-page__container']}>
        <div className={styles['search-page__search-block']}>
          <SearchInput
            placeholder='Search for a movie, tv show, person ...'
            value={searchInput}
            onChange={handleInputChange}
            isError={isError}
            isSuccess={isSuccess}
          />
          <Button
            fill='secondaryFill'
            className={styles['search-page__search-block__button']}
            onClick={handleSearch}>
            Search
          </Button>
        </div>
        {isError && (
          <Paragraph
            weight='600'
            className={styles['search-page__error-message']}>
            The request must have at least 2 characters
          </Paragraph>
        )}
        <div className={styles['search-page__search-results']}>
          <div className={styles['search-page__search-results__panel']}>
            <SearchResults
              films_number={films?.length || 0}
              tvShows_number={tvShows?.length || 0}
              people_number={people?.length || 0}
              onFilmsClick={handleSelectFilms}
              onPeopleClick={handleSelectPeople}
              focusedButton={focusedButton}
            />
          </div>
          {selectedList === 'films' && films ? (
            <div className={styles['search-page__search-results__film-list']}>
              <SearchFilmList films={films} />
            </div>
          ) : null}
          {selectedList === 'people' && people ? (
            <div className={styles['search-page__search-results__people-list']}>
              <SearchPersonList people={people} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
