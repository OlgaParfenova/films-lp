import { NavLinkProps } from 'react-router-dom';

type NavbarButton = {
  text: string;
  capitalized?: boolean;
  className?: string;
};

export type NavbarButtonProps = Omit<NavLinkProps, 'className'> & NavbarButton;
