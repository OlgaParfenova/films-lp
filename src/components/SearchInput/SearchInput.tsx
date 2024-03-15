import { FC } from 'react';
import { InputField } from '../InputField';
import SearchIcon from '../../assets/icons/Search.svg';
import styles from './SearchInput.module.css';
import { InputFieldProps } from '../InputField/InputField.props';
import classnames from 'classnames';

export const SearchInput: FC<InputFieldProps> = ({ placeholder, className, ...props }) => {
  return (
    <InputField
      className={classnames(styles['search-input'], className)}
      placeholder={placeholder}
      icon={<SearchIcon className={styles['search-input__icon']} />}
      {...props}></InputField>
  );
};
