import { Spin } from 'antd';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetNowPlayingFilmsQuery } from '../../API/nowPlayingFilmsApi/getNowPlayingFilmsEndpoint';
import {
  Button,
  FilmCardGrid,
  FilmsList,
  Paragraph,
  SearchInput,
  Title,
} from '../../components';
import { routes } from '../../router/routes';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: filmsData, isLoading } = useGetNowPlayingFilmsQuery();

  const handleSearchButtonClick = () => {
    if (searchQuery.length < 2) {
      setIsError(true);
      setIsSuccess(false);
    } else {
      setIsError(false);
      setIsSuccess(true);
      navigate({
        pathname: routes.searchFilmsPageURL,
        search: `?query=${searchQuery}`,
      });
    }
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (!filmsData || (!filmsData && isLoading))
    return (
      <div className={styles['mainPage__container']}>
        <Spin size='large' />
      </div>
    );

  return (
    <div className={styles['mainPage__background']}>
      <div className={styles['mainPage__container']}>
        <div className={styles['mainPage__text']}>
          <Title>Welcome.</Title>
          <Paragraph size='xl'>
            Millions of movies, TV shows and people to discover. Explore now.
          </Paragraph>
        </div>
        <div className={styles['mainPage__search-block']}>
          <SearchInput
            placeholder='Search for a movie, tv show, person ...'
            onChange={handleSearchInput}
            value={searchQuery}
            isError={isError}
            isSuccess={isSuccess}
          />
          <Button
            fill='secondaryFill'
            className={styles['mainPage__search-block__button']}
            onClick={handleSearchButtonClick}>
            Search
          </Button>
        </div>
        {isError && (
          <Paragraph
            weight='600'
            className={styles['main-page__error-message']}>
            The request must have at least 2 characters
          </Paragraph>
        )}
        <div className={styles['mainPage__now-playing-block']}>
          <Title className={styles['mainPage__now-playing-block__title']}>
            Now playing:
          </Title>
          <FilmCardGrid>
            <FilmsList films={filmsData.results} />
          </FilmCardGrid>
        </div>
      </div>
    </div>
  );
};
