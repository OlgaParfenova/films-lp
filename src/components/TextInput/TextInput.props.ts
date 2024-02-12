import { HTMLProps, ReactNode } from 'react';

type TextInput = {
  isError?: boolean;
  isSuccess?: boolean;
  placeholder?: string;
  icon?: ReactNode;
};

export type TextInputProps = Omit<HTMLProps<HTMLInputElement>, 'placeholder'> &
  TextInput;
