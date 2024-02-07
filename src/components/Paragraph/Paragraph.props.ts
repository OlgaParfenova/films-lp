import { HTMLAttributes } from 'react';

type Paragraph = {
  size?: 'xs' | 's' | 'm' | 'xm' | 'l' | 'xl';
  color?: 'black' | 'white' | 'blue' | 'pink' | 'gray';
  capitals?: boolean;
};

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & Paragraph;
