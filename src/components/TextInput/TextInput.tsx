import { ChangeEvent, FC, useMemo, useState } from 'react';
import classNames from 'classnames';
import { TextInputProps } from './TextInput.props';
import styles from './TextInput.module.css';

export const TextInput: FC<TextInputProps> = ({
  isError,
  isSuccess,
  placeholder,
  icon,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleInputFocus = () => {
    setIsFocus(true);
  };
  const handleInputBlur = () => {
    setIsFocus(false);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);
  const divClassnames = useMemo(() => {
    return classNames(styles['input-block'], {
      [styles['focused']]: isFocus,
      [styles['error']]: isError,
      [styles['success']]: isSuccess,
      [styles['with-content']]: !isFocus && inputValue.trim().length > 0,
    });
  }, [isFocus, isError, isSuccess, inputValue]);

  return (
    <div className={divClassnames}>
      {placeholder ? (
        <label className={styles['input-block__label']}>{placeholder}</label>
      ) : null}
      {icon || null}
      <input
        {...props}
        className={styles['input-block__input']}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
