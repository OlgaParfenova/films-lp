import { ChangeEvent, FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { InputField } from '../InputField';
import { DateFieldFilterProps } from './DateFieldFilter.props';

export const DateFieldFilter: FC<DateFieldFilterProps> = ({
  searchParam,
  onChange,
  ...props
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    console.log('DATE', value);
    setSearchParams({
      ...searchParamsObj,
      ...(isValue ? { [searchParam]: value } : {}),
      page: '1',
    });
  };

  return <InputField {...props} onChange={handleInputChange} type='date' />;
};
