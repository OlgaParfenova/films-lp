import { useParams } from 'react-router-dom';
import { Title } from '../../components';
import { TvShowDetailsInfo, Review } from '../../layouts';
import styles from './TvShowDetailsPage.module.css';
import { useGetTvShowDetailsQuery } from '../../API/tvShowDetailsApi/getTvShowDetailsEndpoint';
import { useGetTvShowReviewsQuery } from '../../API/tvShowReviewsApi/getTvShowReviewsEndpoint';

export const TvShowDetailsPage = () => {
  const { id } = useParams<string>();
  const { data: tvShowData, isLoading } = useGetTvShowDetailsQuery(Number(id));
  const { data: reviewsData } = useGetTvShowReviewsQuery(Number(id));

  if (isLoading)
    return (
      <Title className={styles['details-page__message']}>Loading ...</Title>
    );
  if (!tvShowData)
    return (
      <Title className={styles['details-page__message']}>Film not found</Title>
    );
  return (
    <div className={styles['details-page__background']}>
      <div
        className={styles['details-page__background-image']}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${tvShowData.poster_path})`,
        }}
      />
      <div className={styles['details-page__content']}>
        <TvShowDetailsInfo
          showName={tvShowData.name}
          rating={tvShowData.vote_average}
          runtime={tvShowData.episode_run_time}
          genres={tvShowData.genres}
          first_air_date={tvShowData.first_air_date}
          tagline={tvShowData.tagline}
          storyline={tvShowData.overview}
          poster={tvShowData.poster_path}
          last_air_date={tvShowData.last_air_date}
          number_of_episodes={tvShowData.number_of_episodes}
          number_of_seasons={tvShowData.number_of_seasons}
          created_by={tvShowData.created_by}
          origin_country={tvShowData.origin_country}
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
