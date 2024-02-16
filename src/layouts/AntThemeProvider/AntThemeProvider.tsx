import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren } from 'react';
import { lightTheme } from '../../constants';

export const AntThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  //   const [theme, setTheme] = useState<'light' | 'dark'>('light'); ::TODO

  return (
    <ConfigProvider
      //   theme={{ token: theme === 'light' ? lightTheme : darkTheme }}> ::TODO
      theme={{ token: lightTheme }}>
      {children}
    </ConfigProvider>
  );
};
