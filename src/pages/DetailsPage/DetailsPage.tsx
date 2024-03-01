import { Button } from '../../components';
import styles from './DetailsPage.module.css';

export const DetailsPage = () => {
  return (
    <div className={styles['datails-page__background']}>
      <div className={styles['datails-page__container']}>
        <div className={styles['datails-page__poster']}></div>
        <div className={styles['datails-page__info']}>
          <div className={styles['datails-page__info__title']}></div>
          <div className={styles['datails-page__info__rating']}></div>
          <div className={styles['datails-page__info__length']}></div>
          <div className={styles['datails-page__info__genres']}></div>
          <div className={styles['datails-page__info__storyline']}></div>
          <div className={styles['datails-page__info__director']}></div>
          <div className={styles['datails-page__info__actors']}></div>
          <Button>Watch Trailer</Button>
        </div>
        <div>className={styles['datails-page__reviews']}</div>
      </div>
    </div>
  );
};
