import { FC, MouseEvent } from 'react';
import { FilterButtonProps } from './FilterButton.props';
import { Button } from '../Button';
import { useSearchParams } from 'react-router-dom';

export const FilterButton: FC<FilterButtonProps> = ({
  searchParam,
  value,
  onClick,
  isGroup,
  ...props
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const existSearchParam = searchParams.has(searchParam);
  const searchParamValue = searchParams.get(searchParam);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (typeof onClick === 'function') onClick(e);
    const searchParamsObj = Object.fromEntries(searchParams);
    const values = searchParams.get(searchParam)
      ? searchParams.get(searchParam)?.split(',')
      : [];
    const index = values?.indexOf(value);
    if (isGroup && Array.isArray(values)) {
      if (index !== -1 && typeof index === 'number') {
        values.splice(index, 1);
      } else {
        values.push(value);
      }
      searchParamsObj[searchParam] = values.join(',');
    } else {
      searchParamsObj[searchParam] = value;
    }

    setSearchParams({
      ...searchParamsObj,
      page: '1',
    });
  };

  let isActive = false;

  if (!isGroup && existSearchParam) {
    isActive = true;
  }

  if (isGroup && searchParamValue) {
    isActive = searchParamValue.split(',').includes(value);
  }

  return (
    <Button
      {...props}
      size='extra-small'
      onClick={handleButtonClick}
      active={isActive}
    />
  );
};
