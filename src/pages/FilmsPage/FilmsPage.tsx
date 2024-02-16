import { FilmCardGrid, FilmsList, Title } from '../../components';
import PosterOne from '../../assets/images/1.png';
import { FilmFilters } from '../../layouts';
import styles from './FilmsPage.module.css';

const filmData = [
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
  {
    title: 'Film Title 1',
    posterURL: PosterOne,
    rating: 6.3,
  },
];

export const FilmsPage = () => {
  return (
    <>
      <Title className={styles['filmsPage__title']}>Films Page</Title>
      <div className={styles['filmsPage__content-wrapper']}>
        <FilmFilters />
        <FilmCardGrid>
          <FilmsList films={filmData} />
        </FilmCardGrid>
      </div>
    </>
  );
};
