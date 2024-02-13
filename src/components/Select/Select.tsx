import { ChangeEvent, FC } from 'react';
import { SelectProps } from './Select.props';
import styles from './Select.module.css';

export const Select: FC<SelectProps> = ({ options, ...props }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <select
      onChange={handleChange}
      className={styles['select']}
      {...props}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
