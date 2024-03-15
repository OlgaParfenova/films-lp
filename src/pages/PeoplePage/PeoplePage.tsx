import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { PeopleList, PersonCardGrid, Title } from '../../components';
import { useGetPeopleQuery } from '../../API/peopleApi/getPeopleEndpoint';
import styles from './PeoplePage.module.css';
import { Spin } from 'antd';

export const PeoplePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resetPaginatorKey, setResetPaginatorKey] = useState<string>('');

  const pageNumber = searchParams.has('page')
    ? +(searchParams.get('page') as string)
    : 1;

  const searchParamsObj = Object.fromEntries(searchParams);

  const {
    data: peopleData,
    isLoading,
    isError,
    status,
  } = useGetPeopleQuery({
    searchParams: searchParamsObj,
  });

  useEffect(() => {
    if (searchParams.has('page')) return;
    setResetPaginatorKey(String(Math.random()));
  }, [searchParams]);

  const handlePaginationChange = ({ selected }: { selected: number }) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', String(selected + 1));
    setSearchParams(newSearchParams);
  };

  if (!peopleData || (!peopleData && isLoading))
    return (
      <div className={styles['peoplePage__container']}>
        <Spin size='large' />
      </div>
    );

  if (isError)
    return (
      <div className={styles['peoplePage__container']}>
        <Title className={styles['peoplePage__title']}>{status}</Title>
      </div>
    );

  return (
    <div className={styles['peoplePage__container']}>
      <Title className={styles['peoplePage__title']}>People Page</Title>
      <div className={styles['peoplePage__content']}>
        <PersonCardGrid>
          <PeopleList people={peopleData.results} />
        </PersonCardGrid>
      </div>
      <ReactPaginate
        key={resetPaginatorKey}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={peopleData?.total_pages || 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        initialPage={pageNumber - 1}
        onPageChange={handlePaginationChange}
        containerClassName={styles['pagination__container']}
        breakClassName={styles['pagination__item']}
        previousClassName={styles['pagination__item']}
        nextClassName={styles['pagination__item']}
        activeLinkClassName={styles['pagination__item-active']}
        pageLinkClassName={styles['pagination__item']}
      />
    </div>
  );
};
