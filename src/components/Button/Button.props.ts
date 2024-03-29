import { HTMLAttributes } from 'react';

type Button = {
  border?: 'defaultBorder' | 'primaryBorder' | 'secondaryBorder' | 'noBorder';
  fill?: 'primaryFill' | 'secondaryFill' | 'bgSecondaryFill';
  capitalised?: boolean;
  textColor?: 'defaultText' | 'primaryText' | 'secondaryText';
  icon?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large';
  active?: boolean;
};

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & Button;
