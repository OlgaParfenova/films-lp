import { Slider as AntSlider, ConfigProvider } from 'antd';
import { FC } from 'react';
import { SliderProps } from './Slider.props';
import { lightTheme } from '../../constants';

export const Slider: FC<SliderProps> = ({
  min,
  max,
  marks,
  range,
  ...props
}) => {
  //   const [theme, setTheme] = useState<'light' | 'dark'>('light'); ::TODO

  return (
    <ConfigProvider
      //   theme={{ token: theme === 'light' ? lightTheme : darkTheme }}> ::TODO
      theme={{ token: lightTheme }}>
      <AntSlider range={range} marks={marks} min={min} max={max} {...props} />
    </ConfigProvider>
  );
};
