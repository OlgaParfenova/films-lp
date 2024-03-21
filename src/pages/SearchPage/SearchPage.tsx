import { useSearchParams, useMatch, useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { ChangeEvent, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  Button,
  Paragraph,
  SearchFilmList,
  SearchInput,
  SearchPersonList,
} from '../../components';
import { SearchResults } from '../../layouts';
import { FocusedButtonUnion } from '../static';
import { SearchTvShowList } from '../../components/SearchTvShowList';
import { routes } from '../../router/routes';
import { useGetSearchFilmsQuery } from '../../API/searchFilmsApi/getSearchFilmsEndpoint';
import { useGetSearchPeopleQuery } from '../../API/searchPeopleApi/getSearchPeopleEndpoint';
import { useGetSearchTvShowsQuery } from '../../API/searchTvShowsApi/getSearchTvShowsEndpoint';
import styles from './SearchPage.module.css';

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedButton, setFocusedButton] = useState<FocusedButtonUnion>('');
  const [resetPaginatorKey, setResetPaginatorKey] = useState<string>('');
  const navigate = useNavigate();

  const matchPeople = useMatch(routes.searchPeoplePageURL);
  const matchTvShows = useMatch(routes.searchTvShowsPageURL);
  const matchFilms = useMatch(routes.searchFilmsPageURL);

  const isPeople = !!matchPeople;
  const isTvShows = !!matchTvShows;
  const isFilms = !!matchFilms;

  const pageNumber = searchParams.has('page')
    ? +(searchParams.get('page') as string)
    : 1;

  const searchParamsObj = Object.fromEntries(searchParams);

  const { data: filmsData, isLoading: isFilmsLoading } = useGetSearchFilmsQuery(
    {
      searchParams: searchParamsObj,
    }
  );
  const { data: tvShowsData, isLoading: isTvShowsLoading } =
    useGetSearchTvShowsQuery({
      searchParams: searchParamsObj,
    });
  const { data: peopleData, isLoading: isPeopleLoading } =
    useGetSearchPeopleQuery({
      searchParams: searchParamsObj,
    });

  const currentData = isPeople
    ? peopleData
    : isTvShows
    ? tvShowsData
    : filmsData;

  const pageCount = currentData ? currentData.total_pages : 0;

  useEffect(() => {
    if (searchParams.has('page')) return;
    setResetPaginatorKey(String(Math.random()));
  }, [searchParams]);

  useEffect(() => {
    if (matchPeople) {
      setFocusedButton('people');
    } else if (matchTvShows) {
      setFocusedButton('tvShows');
    } else if (matchFilms) {
      setFocusedButton('films');
    }
  }, [matchPeople, matchTvShows, matchFilms]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchInput(query);
    }
  }, [searchParams]);

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
    }
  };

  const handleSelectFilms = () => {
    navigate({
      pathname: routes.searchFilmsPageURL,
      search: `?query=${searchInput}`,
    });
  };

  const handleSelectTvShows = () => {
    navigate({
      pathname: routes.searchTvShowsPageURL,
      search: `?query=${searchInput}`,
    });
  };

  const handleSelectPeople = () => {
    navigate({
      pathname: routes.searchPeoplePageURL,
      search: `?query=${searchInput}`,
    });
  };

  const handlePaginationChange = ({ selected }: { selected: number }) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', String(selected + 1));
    setSearchParams(newSearchParams);
  };

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
              films_number={filmsData?.total_results || 0}
              tvShows_number={tvShowsData?.total_results || 0}
              people_number={peopleData?.total_results || 0}
              onFilmsClick={handleSelectFilms}
              onPeopleClick={handleSelectPeople}
              onTvShowsClick={handleSelectTvShows}
              focusedButton={focusedButton}
            />
          </div>
          {isFilms && (
            <div className={styles['search-page__search-results__film-list']}>
              {isFilmsLoading ? (
                <Spin size='large' />
              ) : (
                filmsData && <SearchFilmList films={filmsData.results} />
              )}
            </div>
          )}
          {isTvShows && (
            <div className={styles['search-page__search-results__film-list']}>
              {isTvShowsLoading ? (
                <Spin size='large' />
              ) : (
                tvShowsData && (
                  <SearchTvShowList tvShows={tvShowsData.results} />
                )
              )}
            </div>
          )}
          {isPeople && (
            <div className={styles['search-page__search-results__people-list']}>
              {isPeopleLoading ? (
                <Spin size='large' />
              ) : (
                peopleData && <SearchPersonList people={peopleData.results} />
              )}
            </div>
          )}
        </div>
        {pageCount > 1 ? (
          <ReactPaginate
            key={resetPaginatorKey}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            initialPage={pageNumber - 1}
            onPageChange={handlePaginationChange}
            containerClassName={styles['pagination-container']}
            breakClassName={styles['pagination-item']}
            previousClassName={styles['pagination-item']}
            nextClassName={styles['pagination-item']}
            activeLinkClassName={styles['pagination-item-active']}
            pageLinkClassName={styles['pagination-item']}
          />
        ) : null}
      </div>
    </div>
  );
};
