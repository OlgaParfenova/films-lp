import { FC, useMemo, useState } from 'react';
import classNames from 'classnames';
import { TextInputProps } from './TextInput.props';
import styles from './TextInput.module.css';

export const TextInput: FC<TextInputProps> = ({
  isError,
  isSuccess,
  placeholder,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleInputFocus = () => {
    setIsFocus(true);
  };
  const handleInputBlur = () => {
    setIsFocus(false);
  };
  const divClassnames = useMemo(() => {
    return classNames(styles['input-block'], {
      [styles['focused']]: isFocus,
      [styles['error']]: isError,
      [styles['success']]: isSuccess,
    });
  }, [isFocus, isError, isSuccess]);

  return (
    <div className={divClassnames}>
      <label className={styles['input-block__label']}>{placeholder}</label>
      <input
        {...props}
        className={styles['input-block__input']}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};
