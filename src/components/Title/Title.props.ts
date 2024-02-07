import { HTMLAttributes } from 'react';

type Title = {
  size: 'small' | 'medium' | 'large';
  color: 'white' | 'black' | 'blue';
};

export type TitleProps = HTMLAttributes<HTMLDivElement> & Title;
