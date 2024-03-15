import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { Title } from '../../components';
import { FilmDetailsInfo, Review } from '../../layouts';
import { useGetFilmDetailsQuery } from '../../API/filmDetailsApi/getFilmDetailsEndpoint';
import { useGetFilmReviewsQuery } from '../../API/filmReviewsApi/getFilmReviewsEndpoint';
import styles from './FilmDetailsPage.module.css';

export const FilmDetailsPage = () => {
  const { id } = useParams<string>();
  const { data: filmData, isLoading } = useGetFilmDetailsQuery(Number(id));
  const { data: reviewsData } = useGetFilmReviewsQuery(Number(id));

  if (isLoading)
    return (
      <div className={styles['details-page__message']}>
        <Spin size='large' />
      </div>
    );
  if (!filmData)
    return (
      <Title className={styles['details-page__message']}>Film not found</Title>
    );
  return (
    <div className={styles['details-page__background']}>
      <div
        className={styles['details-page__background-image']}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${filmData.poster_path})`,
        }}
      />
      <div className={styles['details-page__content']}>
        <FilmDetailsInfo
          filmTitle={filmData.title}
          rating={filmData.vote_average}
          length={filmData.runtime}
          genres={filmData.genres}
          tagline={filmData.tagline}
          storyline={filmData.overview}
          poster={filmData.poster_path}
          year={filmData.release_date}
        />
        <div className={styles['details-page__reviews-container']}>
          {reviewsData?.results.length
            ? reviewsData.results.map((rev) => {
                return (
                  <Review
                    key={rev.id}
                    reviewName={rev.author}
                    reviewDate={rev.created_at}
                    reviewText={rev.content}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
