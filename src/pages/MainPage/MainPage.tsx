import { Spin } from 'antd';
import { useGetNowPlayingFilmsQuery } from '../../API/nowPlayingFilmsApi/getNowPlayingFilmsEndpoint';
import {
  Button,
  FilmCardGrid,
  FilmsList,
  Paragraph,
  SearchInput,
  Title,
} from '../../components';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const { data: filmsData, isLoading } = useGetNowPlayingFilmsQuery();

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
          <SearchInput placeholder='Search for a movie, tv show, person ...' />
          <Button
            fill='secondaryFill'
            className={styles['mainPage__search-block__button']}>
            Search
          </Button>
        </div>
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
