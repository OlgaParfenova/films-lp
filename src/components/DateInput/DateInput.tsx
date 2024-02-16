import { ChangeEvent, FC, useState } from 'react';
import { DateInputProps } from './DateInput.props';
import { TextInput } from '../TextInput';

export const DateInput: FC<DateInputProps> = ({
  value: initialValue,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(
    initialValue ? initialValue.toISOString() : ''
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const date = event.target.valueAsDate;
    setValue(date ? date.toISOString() : '');
    if (onChange) {
      onChange(date);
    }
  };
  return (
    <TextInput value={value} onChange={handleChange} type='date' {...props} />
  );
};
