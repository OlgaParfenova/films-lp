import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { PersonDetails, PersonWork, Title } from '../../components';
import { useGetPeopleDetailsQuery } from '../../API/peopleDetailsApi/getPeopleDetailsEndpoint';
import { useGetPeopleCreditsQuery } from '../../API/peopleCreditsApi/getPeopleCreditsEndpoint';
import styles from './PersonDetailsPage.module.css';

export const PersonDetailsPage = () => {
  const { id } = useParams<string>();
  const { data: personData, isLoading } = useGetPeopleDetailsQuery(Number(id));
  const { data: personCredits } = useGetPeopleCreditsQuery(Number(id));

  if (isLoading)
    return (
      <div className={styles['person-details__message']}>
        <Spin size='large' />
      </div>
    );
  if (!personData)
    return (
      <Title className={styles['person-details__message']}>
        Person not found
      </Title>
    );

  const { cast, crew } = personCredits || {};
  const directingWorks = crew?.filter((film) => film.job === 'Director') || [];
  const producingWorks =
    crew?.filter(
      (film) => film.job === 'Producer' || film.job === 'Executive Producer'
    ) || [];
  const writingWorks =
    crew?.filter(
      (film) => film.job === 'Screenplay' || film.job === 'Writer'
    ) || [];

  return (
    <div className={styles['person-details__bg']}>
      <div className={styles['person-details']}>
        <PersonDetails personData={personData} />
        {cast?.length ? <PersonWork title='Acting' works={cast} /> : null}
        {directingWorks.length ? (
          <PersonWork title='Directing' works={directingWorks} />
        ) : null}
        {producingWorks.length ? (
          <PersonWork title='Producing' works={producingWorks} />
        ) : null}
        {writingWorks.length ? (
          <PersonWork title='Writing' works={writingWorks} />
        ) : null}
      </div>
    </div>
  );
};
