import { HTMLAttributes } from 'react';

type Select = {
  options: string[];
};

export type SelectProps = HTMLAttributes<HTMLSelectElement> & Select;
