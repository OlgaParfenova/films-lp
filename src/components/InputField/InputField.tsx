import { ChangeEvent, FC, useMemo, FocusEvent, useState } from 'react';
import classNames from 'classnames';
import { InputFieldProps } from './InputField.props';
import styles from './InputField.module.css';

export const InputField: FC<InputFieldProps> = ({
  isError,
  isSuccess,
  placeholder,
  icon,
  className,
  id,
  style,
  onFocus,
  onBlur,
  onChange,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (typeof onFocus === 'function') onFocus(e);
    setIsFocus(true);
  };
  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (typeof onBlur === 'function') onBlur(e);
    setIsFocus(false);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') onChange(e);
    setInputValue(e.target.value);
  };
  const divClassnames = useMemo(() => {
    return classNames(styles['input-block'], className, {
      [styles['focused']]: isFocus,
      [styles['error']]: isError,
      [styles['success']]: isSuccess,
      [styles['with-content']]: !isFocus && inputValue.trim().length > 0,
    });
  }, [isFocus, isError, isSuccess, inputValue, className]);

  return (
    <div className={divClassnames} id={id} style={style}>
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
