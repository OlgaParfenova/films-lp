import { Checkbox, ConfigProvider } from 'antd';
import { FC } from 'react';
import { lightTheme } from '../../constants';
import { CheckboxGroupProps } from './CheckboxGroup.props';

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  defaultValue,
  ...props
}) => {
  //   const [theme, setTheme] = useState<'light' | 'dark'>('light'); ::TODO

  return (
    <ConfigProvider
      //   theme={{ token: theme === 'light' ? lightTheme : darkTheme }}> ::TODO
      theme={{ token: lightTheme }}>
      <Checkbox.Group
        options={options}
        defaultValue={defaultValue}
        {...props}
      />
    </ConfigProvider>
  );
};
