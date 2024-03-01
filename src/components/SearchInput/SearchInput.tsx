import { FC } from 'react';
import { InputFieldProps } from '../InputField';
import SearchIcon from '../../assets/icons/Search.svg';
import { TextInputProps } from '../InputField/InputField.props';
import styles from './SearchInput.module.css';

export const SearchInput: FC<TextInputProps> = ({ placeholder, ...props }) => {
  return (
    <InputField
      placeholder={placeholder}
      icon={<SearchIcon className={styles['search-input__icon']} />}
      {...props}></InputField>
  );
};
