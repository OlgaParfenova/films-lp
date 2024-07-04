import { ScreenSize } from './types';

export const getScreenSize = (screenWidth: number): ScreenSize => {
  const breakpoint_1200 = screenWidth > 1199 && screenWidth <= 1300;
  const breakpoint_992 = screenWidth > 991 && screenWidth <= 1199;
  const breakpoint_768 = screenWidth > 767 && screenWidth <= 991;
  const breakpoint_576 = screenWidth > 575 && screenWidth <= 767;
  const breakpoint_320 = screenWidth <= 575;

  return {
    breakpoint_1200,
    breakpoint_992,
    breakpoint_768,
    breakpoint_576,
    breakpoint_320,
  };
};
