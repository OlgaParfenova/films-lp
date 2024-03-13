import { HTMLAttributes } from 'react';

type Option = {
  label: string;
  value: string;
};

type Select = {
  options: Option[];
  searchParam: string;
};

export type SelectProps = HTMLAttributes<HTMLSelectElement> & Select;
