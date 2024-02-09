import { FC } from 'react';
import { TextInput } from '../TextInput';
import SearchIcon from '../../assets/icons/Search.svg';
import { TextInputProps } from '../TextInput/TextInput.props';
import styles from './SearchInput.module.css';

export const SearchInput: FC<TextInputProps> = ({ placeholder, ...props }) => {
  return (
    <TextInput
      placeholder={placeholder}
      icon={<SearchIcon className={styles['search-input__icon']} />}
      {...props}></TextInput>
  );
};
