import { useParams } from 'react-router-dom';
import { Paragraph, Title } from '../../components';
import { FilmDetailsInfo, Paper, Review } from '../../layouts';
import styles from './DetailsPage.module.css';
import { useGetFilmDetailsQuery } from '../../API/filmDetailsApi/getFilmDetailsEndpoint';

const reviews = [
  {
    author: 'JPV852',
    created_at: '2019-10-23T22:36:59.798Z',
    content:
      'Immensely great crime-drama that features some great performances and excellent writing from Oliver Stone (and this coming from someone who isnt a big fan of his) to the direction by Brian De Palma. The score is great though still love the song during the money laundering scene. Still a few slots below the likes of The Godfather and Heat, yet still a amazing film that holds up so well. **4.5/5**',
  },
];

export const DetailsPage = () => {
  const { id } = useParams<string>();
  const { data, isLoading } = useGetFilmDetailsQuery(Number(id));

  if (isLoading)
    return (
      <Title className={styles['details-page__message']}>Loading ...</Title>
    );
  if (!data)
    return (
      <Title className={styles['details-page__message']}>Film not found</Title>
    );
  return (
    <div className={styles['details-page__background']}>
      <div
        className={styles['details-page__background-image']}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
        }}
      />
      <div className={styles['details-page__content']}>
        <FilmDetailsInfo
          filmTitle={data.title}
          rating={data.vote_average}
          length={data.runtime}
          genres={data.genres}
          tagline={data.tagline}
          storyline={data.overview}
          poster={data.poster_path}
          year={data.release_date}
        />
        <div className={styles['details-page__reviews-container']}>
          {reviews.length ? (
            reviews.map((rev) => {
              return (
                <Review
                  key={rev.created_at}
                  reviewName={rev.author}
                  reviewDate={rev.created_at}
                  reviewText={rev.content}
                />
              );
            })
          ) : (
            <Paper>
              <Paragraph size='m'>No reviews available ...</Paragraph>
            </Paper>
          )}
        </div>
      </div>
    </div>
  );
};
