import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { FilmCardGrid, FilmsList, Title } from '../../components';
import { FilmFilters } from '../../layouts';
import { useGetFilmsQuery } from '../../API/filmsApi/getFilmsEndpoint';
import styles from './FilmsPage.module.css';
import { useEffect, useState } from 'react';

export const FilmsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resetPaginatorKey, setResetPaginatorKey] = useState<string>('');
  const pageNumber = searchParams.has('page')
    ? +(searchParams.get('page') as string)
    : 1;

  const searchParamsObj = Object.fromEntries(searchParams);

  const { data, isLoading } = useGetFilmsQuery({
    searchParams: searchParamsObj,
  });

  console.log('data', data);

  useEffect(() => {
    if (searchParams.has('page')) return;
    setResetPaginatorKey(String(Math.random()));
  }, [searchParams]);

  const handlePaginationChange = ({ selected }: { selected: number }) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', String(selected + 1));
    if (searchParams.has('genre')) {
      newSearchParams.set('genre', searchParams.get('genre') as string);
    }
    setSearchParams(newSearchParams);
  };

  if (!data || (!data && isLoading))
    return (
      <div className={styles['filmsPage__container']}>
        <Title className={styles['filmsPage__title']}>Loading ...</Title>
      </div>
    );

  return (
    <div className={styles['filmsPage__container']}>
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
    </div>
  );
};
