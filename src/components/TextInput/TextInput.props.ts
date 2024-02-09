import { HTMLProps } from 'react';

type TextInput = {
  isError?: boolean;
  isSuccess?: boolean;
  placeholder: string;
};

export type TextInputProps = Omit<HTMLProps<HTMLInputElement>, 'placeholder'> &
  TextInput;
