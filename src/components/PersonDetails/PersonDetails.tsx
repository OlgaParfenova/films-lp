import { FC } from 'react';
import { PersonDetailsProps } from './PersonDetails.props';
import { Title } from '../Title';
import { Paragraph } from '../Paragraph';
import { monthNames } from '../static';
import styles from './PersonDetails.module.css';

export const PersonDetails: FC<PersonDetailsProps> = ({ personData }) => {
  const { name, birthday, place_of_birth, biography, profile_path } =
    personData;
  const birthDate = new Date(birthday);
  const day = birthDate.getDate();
  const monthIndex = birthDate.getMonth();
  const year = birthDate.getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  return (
    <div className={styles['person-details__container']}>
      <div
        className={styles['person-details__poster']}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${profile_path})`,
        }}></div>
      <div className={styles['person-details__info']}>
        <Title className={styles['person-details__info__name']}>
          {name}
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
            {place_of_birth}
          </Paragraph>
        </div>
        <div className={styles['person-details__info__item']}>
          <Paragraph size='xm' weight='600'>
            Biography
          </Paragraph>
          <Paragraph size='s' weight='400'>
            {biography}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
