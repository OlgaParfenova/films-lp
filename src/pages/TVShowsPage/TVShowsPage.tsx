import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { FilmCardGrid, TVShowsList, Title } from '../../components';
import { TvFilters } from '../../layouts';
import { useGetTvShowsQuery } from '../../API/tvShowsApi/getTvShowsEndpoint';
import styles from './TVShowsPage.module.css';

export const TVShowsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resetPaginatorKey, setResetPaginatorKey] = useState<string>('');

  const searchParamsObj = Object.fromEntries(searchParams);

  const { data, isLoading } = useGetTvShowsQuery({
    searchParams: searchParamsObj,
  });

  const pageNumber = searchParams.has('page')
    ? +(searchParams.get('page') as string)
    : 1;

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
    if (searchParams.has('air_date.gte')) {
      newSearchParams.set(
        'air_date.gte',
        searchParams.get('air_date.gte') as string
      );
    }
    if (searchParams.has('air_date.lte')) {
      newSearchParams.set(
        'air_date.lte',
        searchParams.get('air_date.lte') as string
      );
    }
    if (searchParams.has('first_air_date.gte')) {
      newSearchParams.set(
        'first_air_date.gte',
        searchParams.get('first_air_date.gte') as string
      );
    }
    if (searchParams.has('first_air_date.lte')) {
      newSearchParams.set(
        'first_air_date.lte',
        searchParams.get('first_air_date.lte') as string
      );
    }
    setSearchParams(newSearchParams);
  };

  if (!data || (!data && isLoading))
    return (
      <div className={styles['tvShowsPage__container']}>
        <Spin size='large' />
      </div>
    );

  return (
    <div className={styles['tvShowsPage__container']}>
      <Title className={styles['tvShowsPage__title']}>TV Shows Page</Title>
      <div className={styles['tvShowsPage__content-wrapper']}>
        <TvFilters />
        <FilmCardGrid>
          <TVShowsList shows={data.results} />
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
