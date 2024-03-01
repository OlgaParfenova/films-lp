import { Paragraph } from '../../components';
import { FilmDetailsInfo, Paper, Review } from '../../layouts';
import styles from './DetailsPage.module.css';

const reviews = [
  {
    author: 'JPV852',
    created_at: '2019-10-23T22:36:59.798Z',
    content:
      'Immensely great crime-drama that features some great performances and excellent writing from Oliver Stone (and this coming from someone who isnt a big fan of his) to the direction by Brian De Palma. The score is great though still love the song during the money laundering scene. Still a few slots below the likes of The Godfather and Heat, yet still a amazing film that holds up so well. **4.5/5**',
  },
];

export const DetailsPage = () => {
  return (
    <div className={styles['details-page__background']}>
      <FilmDetailsInfo
        filmTitle='Film Title'
        rating={5.5}
        length={120}
        genres={[
          {
            id: 28,
            name: 'Action',
          },
          {
            id: 80,
            name: 'Crime',
          },
          {
            id: 18,
            name: 'Drama',
          },
        ]}
        tagline='He loved the American Dream. With a vengeance.'
        storyline='After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.'
        poster='/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg'
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
  );
};
