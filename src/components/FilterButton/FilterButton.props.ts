import { ButtonProps } from '../Button/Button.props';

type FilterButton = {
  searchParam: string;
  value: string;
  isGroup?: boolean;
};

export type FilterButtonProps = ButtonProps & FilterButton;
