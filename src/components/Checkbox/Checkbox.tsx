import { Checkbox as AntCheckbox, ConfigProvider } from 'antd';
import { FC } from 'react';
import { lightTheme } from '../../constants';
import { CheckboxCustomProps } from './Checkbox.props';

export const Checkbox: FC<CheckboxCustomProps> = ({ value, ...props }) => {
  //   const [theme, setTheme] = useState<'light' | 'dark'>('light'); ::TODO
  return (
    <ConfigProvider
      //   theme={{ token: theme === 'light' ? lightTheme : darkTheme }}> ::TODO
      theme={{ token: lightTheme }}>
      <AntCheckbox {...props}> {value} </AntCheckbox>
    </ConfigProvider>
  );
};
