import { HTMLAttributes } from 'react';

type Title = {
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'secondary';
  capitals?: boolean;
};

export type TitleProps = HTMLAttributes<HTMLDivElement> & Title;
