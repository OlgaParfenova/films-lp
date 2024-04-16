import {
  createContext,
  FC,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react';
import { getScreenSize } from '../getScreenSize';
import { ScreenSize } from '../types';

const defaultValue: ScreenSize = {
  breakpoint_1200: false,
  breakpoint_992: false,
  breakpoint_768: false,
  breakpoint_576: false,
  breakpoint_320: false,
};

// eslint-disable-next-line react-refresh/only-export-components
export const ctx = createContext<ScreenSize>(defaultValue);

/**
 * Window.matchMedia()
 * https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia
 *
 * ResizeObserver
 * https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
 */

export const WindowResizeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<ScreenSize>(defaultValue);

  useEffect(() => {
    setValue(getScreenSize(screen.width));
    const cb = () => {
      const screenWidth = screen.width;
      setValue(getScreenSize(screenWidth));
    };
    window.addEventListener('resize', cb);
    return () => {
      window.removeEventListener('resize', cb);
    };
  }, []);

  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};
