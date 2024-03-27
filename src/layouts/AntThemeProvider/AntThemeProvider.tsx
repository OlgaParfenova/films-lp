import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren, useEffect } from 'react';
import { darkTheme, lightTheme } from '../../constants';
import { useTypedSelector } from '../../API/hooks';

export const AntThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const darkMode = useTypedSelector((state) => state.theme.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return <ConfigProvider theme={{ token: theme }}>{children}</ConfigProvider>;
};
