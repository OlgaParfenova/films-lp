import { FC } from 'react';
import { SearchResultsButtonProps } from './SearchResultsButton.props';
import { Paragraph } from '../Paragraph';
import styles from './SearchResultsButton.module.css';
import classNames from 'classnames';

export const SearchResultsButton: FC<SearchResultsButtonProps> = ({
  title,
  number,
  className,
  isFocused,
  ...props
}) => {
  const buttonClass = classNames(styles['button'], className, {
    [styles['button-focused']]: isFocused,
  });
  return (
    <button className={buttonClass} {...props}>
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
