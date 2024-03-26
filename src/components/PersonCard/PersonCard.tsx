import { FC, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paragraph } from '../Paragraph';
import { PersonCardProps } from './PersonCard.props';
import { routes } from '../../router/routes';
import EmptyPicture from '/img/emptyPerson.jpg';
import styles from './PersonCard.module.css';

export const PersonCard: FC<PersonCardProps> = ({
  id,
  name,
  known_for,
  profile_path,
  ...props
}) => {
  const navigate = useNavigate();
  const handlePersonDetailsClick = () => {
    navigate(routes.personPageURL(id));
  };

  const titles = known_for.map((item) => item.title).filter(Boolean);
  const titlesString = titles.join(', ');
  const titlesWithAnd = titlesString.replace(/, ([^,]*)$/, ' and $1');
  const titlesWithPeriod = `${titlesWithAnd}.`;

  return (
    <div className={styles['card']} {...props}>
      <div
        className={styles['card__poster']}
        onClick={handlePersonDetailsClick}>
        <img
          src={profile_path || EmptyPicture}
          alt='poster'
          onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = EmptyPicture;
          }}
        />
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
          className={styles['card__name']}
          onClick={handlePersonDetailsClick}>
          {name}
        </Paragraph>
      ) : (
        <Paragraph
          size='xs'
          color='primary'
          weight='600'
          className={styles['card__name']}
          onClick={handlePersonDetailsClick}>
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
