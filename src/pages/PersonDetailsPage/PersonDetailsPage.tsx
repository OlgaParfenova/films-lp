import { List } from 'antd';
import { Paragraph, Title } from '../../components';
import styles from './PersonDetailsPage.module.css';
import { useGetPeopleDetailsQuery } from '../../API/peopleDetailsApi/getPeopleDetailsEndpoint';
import { useGetPeopleCreditsQuery } from '../../API/peopleCreditsApi/getPeopleCreditsEndpoint';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../../router/routes';

export const PersonDetailsPage = () => {
  const { id } = useParams<string>();
  const { data: personData, isLoading } = useGetPeopleDetailsQuery(Number(id));
  const { data: personCredits } = useGetPeopleCreditsQuery(Number(id));
  const navigate = useNavigate();

  const handleFilmDetailsClick = (filmId: number) => {
    navigate(routes.filmPageURL(filmId));
  };

  if (isLoading)
    return (
      <Title className={styles['person-details__message']}>Loading ...</Title>
    );
  if (!personData)
    return (
      <Title className={styles['person-details__message']}>
        Person not found
      </Title>
    );

  const birthDate = new Date(personData.birthday);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = birthDate.getDate();
  const monthIndex = birthDate.getMonth();
  const year = birthDate.getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

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
    <div className={styles['person-details']}>
      <div className={styles['person-details__container']}>
        <div
          className={styles['person-details__poster']}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${personData.profile_path})`,
          }}></div>
        <div className={styles['person-details__info']}>
          <Title className={styles['person-details__info__name']}>
            {personData.name}
          </Title>
          <div className={styles['person-details__info__item']}>
            <Paragraph size='xm' weight='600'>
              Birthday
            </Paragraph>
            <Paragraph size='s' weight='400'>
              {monthNames[monthIndex]} {day}, {year} ({age} years old)
            </Paragraph>
          </div>
          <div className={styles['person-details__info__item']}>
            <Paragraph size='xm' weight='600'>
              Place of birth
            </Paragraph>
            <Paragraph size='s' weight='400'>
              {personData.place_of_birth}
            </Paragraph>
          </div>
          <div className={styles['person-details__info__item']}>
            <Paragraph size='xm' weight='600'>
              Biography
            </Paragraph>
            <Paragraph size='s' weight='400'>
              {personData.biography}
            </Paragraph>
          </div>
        </div>
      </div>
      <div className={styles['person-details__work']}>
        {cast ? (
          <div className={styles['person-details__work-item']}>
            <List
              header={
                <Paragraph size='xm' weight='600'>
                  Acting
                </Paragraph>
              }
              dataSource={cast}
              renderItem={(film) => (
                <div className={styles['person-details__work__list-element']}>
                  <Paragraph size='s' weight='400'>
                    {film.release_date
                      ? new Date(film.release_date).getFullYear()
                      : '-'}
                  </Paragraph>
                  <Paragraph
                    size='s'
                    weight='600'
                    onClick={() => handleFilmDetailsClick(film.id)}
                    className={styles['list-element__title']}>
                    {film.title || 'title is not available'}
                  </Paragraph>
                  <Paragraph size='s' weight='400'>
                    as {film.character || '-'}
                  </Paragraph>
                </div>
              )}
            />
          </div>
        ) : null}

        {directingWorks.length ? (
          <div className={styles['person-details__work-item']}>
            <List
              header={
                <Paragraph size='xm' weight='600'>
                  Directing
                </Paragraph>
              }
              dataSource={directingWorks}
              renderItem={(film) => (
                <div className={styles['person-details__work__list-element']}>
                  <Paragraph size='s' weight='400'>
                    {film.release_date
                      ? new Date(film.release_date).getFullYear()
                      : '-'}
                  </Paragraph>
                  <Paragraph
                    size='s'
                    weight='600'
                    onClick={() => handleFilmDetailsClick(film.id)}
                    className={styles['list-element__title']}>
                    {film.title || 'title is not available'}
                  </Paragraph>
                  <Paragraph size='s' weight='400'>
                    as {film.job || '-'}
                  </Paragraph>
                </div>
              )}
            />
          </div>
        ) : null}

        {producingWorks.length ? (
          <div className={styles['person-details__work-item']}>
            <List
              header={
                <Paragraph size='xm' weight='600'>
                  Producing
                </Paragraph>
              }
              dataSource={producingWorks}
              renderItem={(film) => (
                <div className={styles['person-details__work__list-element']}>
                  <Paragraph size='s' weight='400'>
                    {film.release_date
                      ? new Date(film.release_date).getFullYear()
                      : '-'}
                  </Paragraph>
                  <Paragraph
                    size='s'
                    weight='600'
                    onClick={() => handleFilmDetailsClick(film.id)}
                    className={styles['list-element__title']}>
                    {film.title || 'title is not available'}
                  </Paragraph>
                  <Paragraph size='s' weight='400'>
                    as {film.job || '-'}
                  </Paragraph>
                </div>
              )}
            />
          </div>
        ) : null}

        {writingWorks.length ? (
          <div className={styles['person-details__work-item']}>
            <List
              header={
                <Paragraph size='xm' weight='600'>
                  Writing
                </Paragraph>
              }
              dataSource={writingWorks}
              renderItem={(film) => (
                <div className={styles['person-details__work__list-element']}>
                  <Paragraph size='s' weight='400'>
                    {film.release_date
                      ? new Date(film.release_date).getFullYear()
                      : '-'}
                  </Paragraph>
                  <Paragraph
                    size='s'
                    weight='600'
                    onClick={() => handleFilmDetailsClick(film.id)}
                    className={styles['list-element__title']}>
                    {film.title || 'title is not available'}
                  </Paragraph>
                  <Paragraph size='s' weight='400'>
                    as {film.job || '-'}
                  </Paragraph>
                </div>
              )}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
