import { HTMLProps, ReactNode } from 'react';

type InputFieldCustomProps = {
  isError?: boolean;
  isSuccess?: boolean;
  icon?: ReactNode;
};

export type InputFieldProps = HTMLProps<HTMLInputElement> &
  InputFieldCustomProps;
