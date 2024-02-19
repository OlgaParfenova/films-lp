import { FilmCardGrid, FilmsList, Title } from '../../components';
import { FilmFilters } from '../../layouts';
import { useGetFilmsQuery } from '../../redux';
import styles from './FilmsPage.module.css';

export const FilmsPage = () => {
  const { data = [], isLoading } = useGetFilmsQuery(undefined);

  if (isLoading) return <Title>Loading ...</Title>;
  console.log(data.results);

  return (
    <>
      <Title className={styles['filmsPage__title']}>Films Page</Title>
      <div className={styles['filmsPage__content-wrapper']}>
        <FilmFilters />
        <FilmCardGrid>
          <FilmsList films={data.results} />
        </FilmCardGrid>
      </div>
    </>
  );
};
