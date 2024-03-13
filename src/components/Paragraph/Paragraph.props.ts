import { HTMLAttributes } from 'react';

type Paragraph = {
  size?: 'xs' | 's' | 'm' | 'xm' | 'l' | 'xl';
  color?: 'primary' | 'default' | 'secondary' | 'pink' | 'gray';
  capitals?: boolean;
  weight?: '400' | '600';
};

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & Paragraph;
