import { Slider as AntSlider, ConfigProvider } from 'antd';
import { FC, useState } from 'react';
import { SliderProps } from './Slider.props';

export const Slider: FC<SliderProps> = ({
  min,
  max,
  marks,
  range,
  ...props
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const lightTheme = {
    colorPrimary: '#e91e63',
    colorPrimaryHover: '#304ffe',
    colorTextBase: '#212121',
    colorTextDisabled: '#9e9e9e',
    colorTextSecondary: '#757575',
  };

  const darkTheme = {
    colorPrimary: '#880E4F',
    colorPrimaryHover: '#1A237E',
    colorTextBase: '#FFFFFF',
    colorTextDisabled: '#9e9e9e',
    colorTextSecondary: '#757575',
  };
  return (
    <ConfigProvider
      theme={{
        token: theme === 'light' ? lightTheme : darkTheme,
      }}>
      <AntSlider range={range} marks={marks} min={min} max={max} {...props} />
    </ConfigProvider>
  );
};
