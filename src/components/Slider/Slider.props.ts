import { SliderMarks } from 'antd/es/slider';

type Mark =
  | string
  | {
      style: {
        color: string;
        fontWeight: string;
      };
      label: string;
    };

export type Marks = {
  [key: number]: Mark;
};

type Slider = {
  marks?: Marks;
  min: number;
  max: number;
  range: boolean;
};

export type SliderProps = SliderMarks & Slider;
