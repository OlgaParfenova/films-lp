import { FC } from 'react';
import { List } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PersonWorkProps } from './PersonWork.props';
import { Paragraph } from '../Paragraph';
import { routes } from '../../router/routes';
import {
  Cast,
  Crew,
} from '../../API/peopleCreditsApi/getPeopleCreditsEndpoint';
import styles from './PersonWork.module.css';

export const PersonWork: FC<PersonWorkProps> = ({ title, works }) => {
  const navigate = useNavigate();

  const handleFilmDetailsClick = (filmId: number) => {
    navigate(routes.filmPageURL(filmId));
  };
  return (
    <div className={styles['person-details__work-item']}>
      <List
        header={
          <Paragraph size='xm' weight='600'>
            {title}
          </Paragraph>
        }
        dataSource={works}
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
              as {(film as Cast).character || (film as Crew).job || '-'}
            </Paragraph>
          </div>
        )}
      />
    </div>
  );
};
