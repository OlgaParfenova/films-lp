import { useParams } from 'react-router-dom';
import { Title } from '../../components';
import { FilmDetailsInfo, Review } from '../../layouts';
import styles from './DetailsPage.module.css';
import { useGetFilmDetailsQuery } from '../../API/filmDetailsApi/getFilmDetailsEndpoint';
import { useGetReviewsQuery } from '../../API/reviewsApi/getReviewsEndpoint';

export const DetailsPage = () => {
  const { id } = useParams<string>();
  const { data: filmData, isLoading } = useGetFilmDetailsQuery(Number(id));
  const { data: reviewsData } = useGetReviewsQuery(Number(id));

  if (isLoading)
    return (
      <Title className={styles['details-page__message']}>Loading ...</Title>
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
