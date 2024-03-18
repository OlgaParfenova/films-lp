import { FC } from 'react';
import { SearchResultsButtonProps } from './SearchResultsButton.props';
import { Paragraph } from '../Paragraph';
import styles from './SearchResultsButton.module.css';
import classNames from 'classnames';

export const SearchResultsButton: FC<SearchResultsButtonProps> = ({
  title,
  number,
  className,
  ...props
}) => {
  return (
    <button className={classNames(styles['button'], className)} {...props}>
      <div className={styles['button-wrap']}>
        <Paragraph size='s' weight='600'>
          {title}
        </Paragraph>
        <Paragraph size='xs' className={styles['button-number']}>
          {number}
        </Paragraph>
      </div>
    </button>
  );
};
