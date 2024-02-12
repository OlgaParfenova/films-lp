import { TextInputProps } from '../TextInput/TextInput.props';

type DateInput = {
  value?: Date;
  onChange?: (date: Date | null) => void;
};

export type DateInputProps = Omit<TextInputProps, 'onChange' | 'value'> &
  DateInput;
