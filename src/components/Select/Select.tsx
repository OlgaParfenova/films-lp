import { ChangeEvent, FC } from 'react';
import { SelectProps } from './Select.props';
import styles from './Select.module.css';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

export const Select: FC<SelectProps> = ({
  options,
  className,
  searchParam,
  onChange,
  ...props
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChange === 'function') {
      onChange(e);
    }
    const value = e.target.value;
    const isValue = value !== '';
    const existSearchParam = searchParams.has(searchParam);
    const searchParamsObj = Object.fromEntries(searchParams);
    if (!isValue && existSearchParam) {
      delete searchParamsObj[searchParam];
    }
    setSearchParams({
      ...searchParamsObj,
      ...(isValue ? { [searchParam]: value } : {}),
      page: '1',
    });
  };
  return (
    <select
      className={classNames(styles['select'], className)}
      onChange={handleSelectChange}
      {...props}>
      {options.map(({ label, value }) => (
        <option key={`${value}-${label}`} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
