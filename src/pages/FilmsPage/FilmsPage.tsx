import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { FilmCardGrid, FilmsList, Title } from '../../components';
import { FilmFilters } from '../../layouts';
import { useGetFilmsQuery } from '../../API/filmsApi/getFilmsEndpoint';
import styles from './FilmsPage.module.css';

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

  useEffect(() => {
    if (searchParams.has('page')) return;
    setResetPaginatorKey(String(Math.random()));
  }, [searchParams]);

  const handlePaginationChange = ({ selected }: { selected: number }) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', String(selected + 1));
    if (searchParams.has('with_genres')) {
      newSearchParams.set(
        'with_genres',
        searchParams.get('with_genres') as string
      );
    }
    if (searchParams.has('with_watch_monetization_types')) {
      newSearchParams.set(
        'with_watch_monetization_types',
        searchParams.get('with_watch_monetization_types') as string
      );
    }
    if (searchParams.has('with_release_type')) {
      newSearchParams.set(
        'with_release_type',
        searchParams.get('with_release_type') as string
      );
    }
    if (searchParams.has('vote_average.gte')) {
      newSearchParams.set(
        'vote_average.gte',
        searchParams.get('vote_average.gte') as string
      );
    }
    if (searchParams.has('vote_average.lte')) {
      newSearchParams.set(
        'vote_average.lte',
        searchParams.get('vote_average.lte') as string
      );
    }
    if (searchParams.has('vote_count.gte')) {
      newSearchParams.set(
        'vote_count.gte',
        searchParams.get('vote_count.gte') as string
      );
    }
    if (searchParams.has('with_runtime.gte')) {
      newSearchParams.set(
        'with_runtime.gte',
        searchParams.get('with_runtime.gte') as string
      );
    }
    if (searchParams.has('with_runtime.lte')) {
      newSearchParams.set(
        'with_runtime.lte',
        searchParams.get('with_runtime.lte') as string
      );
    }
    if (searchParams.has('sort_by')) {
      newSearchParams.set('sort_by', searchParams.get('sort_by') as string);
    }
    if (searchParams.has('primary_release_date.gte')) {
      newSearchParams.set(
        'primary_release_date.gte',
        searchParams.get('primary_release_date.gte') as string
      );
    }
    if (searchParams.has('primary_release_date.lte')) {
      newSearchParams.set(
        'primary_release_date.lte',
        searchParams.get('primary_release_date.lte') as string
      );
    }
    setSearchParams(newSearchParams);
  };

  if (!data || (!data && isLoading))
    return (
      <div className={styles['filmsPage__container']}>
        <Spin size='large' />
      </div>
    );

  return (
    <div className={styles['filmsPage__bg-primary']}>
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
    </div>
  );
};
