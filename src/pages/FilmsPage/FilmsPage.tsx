import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';
import { FilmCardGrid, FilmsList, Title } from '../../components';
import { FilmFilters } from '../../layouts';
import { useGetFilmsQuery } from '../../redux';
import styles from './FilmsPage.module.css';

export const FilmsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.has('page')
    ? +(searchParams.get('page') as string)
    : 1;
  const { data = [], isLoading } = useGetFilmsQuery(pageNumber);

  const handlePaginationChange = ({ selected }: { selected: number }) => {
    setSearchParams({
      page: String(selected + 1),
    });
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
