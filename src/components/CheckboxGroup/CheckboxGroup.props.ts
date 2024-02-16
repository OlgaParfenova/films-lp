import { CheckboxValueType } from 'antd/es/checkbox/Group';

type OptionType = {
  label: string;
  value: CheckboxValueType;
};

export type CheckboxGroupProps = {
  options?: OptionType[];
  defaultValue?: CheckboxValueType[];
}
