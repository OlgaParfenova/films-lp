import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { FilmCardGrid, FilmsList, Title } from '../../components';
import { FilmFilters } from '../../layouts';
import { useGetFilmsQuery } from '../../redux';
import styles from './FilmsPage.module.css';
import { useEffect, useState } from 'react';

const genreIds: { [key: string]: number } = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  'Science Fiction': 878,
  'TV Movie': 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

export const FilmsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resetPaginatorKey, setResetPaginatorKey] = useState<string>('');
  const pageNumber = searchParams.has('page')
    ? +(searchParams.get('page') as string)
    : 1;
  const genre = searchParams.has('genre') ? searchParams.get('genre') : null;
  const genreId = genre ? genreIds[genre] : null;
  const { data = [], isLoading } = useGetFilmsQuery({
    pageNumber,
    genreId,
  });

  useEffect(() => {
    if (searchParams.has('page')) return;
    setResetPaginatorKey(String(Math.random()));
  }, [searchParams, genre]);

  const handlePaginationChange = ({ selected }: { selected: number }) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', String(selected + 1));
    if (searchParams.has('genre')) {
      newSearchParams.set('genre', searchParams.get('genre') as string);
    }
    setSearchParams(newSearchParams);
  };

  if (isLoading) return <Title>Loading ...</Title>;

  return (
    <>
      <Title className={styles['filmsPage__title']}>Films Page</Title>
      <div className={styles['filmsPage__content-wrapper']}>
        <FilmFilters />
        <FilmCardGrid>
          <FilmsList films={data.results} />
        </FilmCardGrid>
      </div>
      <ReactPaginate
        key={resetPaginatorKey}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={data.total_pages}
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
    </>
  );
};
