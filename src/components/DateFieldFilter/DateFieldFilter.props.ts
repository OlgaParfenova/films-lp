import { InputFieldProps } from '../InputField/InputField.props';

type DateFieldFilter = {
  searchParam: string;
};

export type DateFieldFilterProps = Omit<InputFieldProps, 'type'> &
  DateFieldFilter;
