import { HTMLAttributes } from 'react';

type Title = {
  size?: 'small' | 'medium' | 'large';
  color?: 'white' | 'black' | 'blue';
  capitals?: boolean;
};

export type TitleProps = HTMLAttributes<HTMLDivElement> & Title;
