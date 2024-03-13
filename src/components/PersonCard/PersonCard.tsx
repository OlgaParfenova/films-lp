import { FC } from 'react';
import { Paragraph } from '../Paragraph';
import { PersonCardProps } from './PersonCard.props';
import styles from './PersonCard.module.css';
// import { useNavigate } from 'react-router-dom';
// import { routes } from '../../router/routes';

export const PersonCard: FC<PersonCardProps> = ({
  id,
  name,
  known_for,
  profile_path,
  ...props
}) => {
  // const navigate = useNavigate();
  // const handleFilmDetailsClick = () => {
  //   navigate(routes.filmPageURL(id));
  // };
  console.log('id', id);

  const titles = known_for.map((item) => item.title).filter(Boolean);
  const titlesString = titles.join(', ');
  const titlesWithAnd = titlesString.replace(/, ([^,]*)$/, ' and $1');
  const titlesWithPeriod = `${titlesWithAnd}.`;

  return (
    <div className={styles['card']} {...props}>
      <div className={styles['card__poster']}>
        <img src={profile_path} alt='poster' />
        <div className={styles['card__poster-overlay']}>
          <Paragraph size='xm' color='default'>
            Learn more
          </Paragraph>
        </div>
      </div>
      {name.length <= 25 ? (
        <Paragraph
          size='xm'
          color='primary'
          weight='600'
          className={styles['card__name']}>
          {name}
        </Paragraph>
      ) : (
        <Paragraph
          size='xs'
          color='primary'
          weight='600'
          className={styles['card__name']}>
          {name}
        </Paragraph>
      )}
      <Paragraph
        size='xs'
        color='gray'
        weight='600'
        className={styles['card__info']}>
        {titlesWithPeriod}
      </Paragraph>
    </div>
  );
};
