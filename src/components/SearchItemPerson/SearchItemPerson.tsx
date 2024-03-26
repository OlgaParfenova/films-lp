import { FC } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Paragraph } from '../Paragraph';
import { SearchItemPersonProps } from './SearchItemPerson.props';
import styles from './SearchItemPerson.module.css';

export const SearchItemPerson: FC<SearchItemPersonProps> = ({
  name,
  profile_path,
  known_for_department,
  known_for,
  id,
  className,
  ...props
}) => {
  const navigate = useNavigate();
  if (!name || !known_for_department || !known_for) return;

  const handlePersonClick = () => {
    navigate(`/person/${id}`);
  };

  return (
    <div
      className={classNames(styles['search-item-person__wrap'], className)}
      {...props}>
      {profile_path && profile_path.length ? (
        <div
          className={styles['search-item-person__picture']}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${profile_path})`,
          }}
          onClick={handlePersonClick}></div>
      ) : (
        <div
          className={styles['search-item-person__picture']}
          style={{
            backgroundImage: 'url(/img/emptyPerson.jpg)',
          }}></div>
      )}
      <div className={styles['search-item-person__info']}>
        <Paragraph
          className={styles['info__name']}
          size='m'
          weight='600'
          onClick={handlePersonClick}>
          {name}
        </Paragraph>
        <Paragraph className={styles['info__work']} size='s' color='gray'>
          {known_for_department}
        </Paragraph>
        <div className={styles['info__work-list']}>
          {known_for.map((work, index) => {
            const prefix = index > 0 ? ', ' : '';
            return (
              <Paragraph size='s'>
                {prefix}
                {work.title?.trim()}
              </Paragraph>
            );
          })}
        </div>
      </div>
    </div>
  );
};
