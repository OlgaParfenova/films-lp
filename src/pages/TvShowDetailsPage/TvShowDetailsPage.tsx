import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
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
      <div className={styles['details-page__message']}>
        <Spin size='large' />
      </div>
    );
  if (!tvShowData)
    return (
      <Title className={styles['details-page__message']}>
        TV Show not found
      </Title>
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
        <TvShowDetailsInfo data={tvShowData} />
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
