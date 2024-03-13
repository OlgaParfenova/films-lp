import { FC, useState } from 'react';
import Checkbox from 'antd/es/checkbox';
import { Slider } from 'antd';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import {
  DateFieldFilter,
  FilterButton,
  Paragraph,
  Select,
} from '../../components';
import { Paper } from '../Paper';
import { TvFiltersProps } from './TvFilters.props';
import { useGetTvShowsGenresQuery } from '../../API/tvShowsGenresApi/getTvShowsGenresEndpoint';
import styles from './TvFilters.module.css';

export const TvFilters: FC<TvFiltersProps> = ({ className }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [, setUserScoreValues] = useState([0, 10]);
  const [, setMinUserVotes] = useState(0);
  const [, setRuntimeValues] = useState([0, 400]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: tvGenresResponse } = useGetTvShowsGenresQuery();

  const tvGenres = tvGenresResponse ? tvGenresResponse.genres : [];
  const searchParamsObj = Object.fromEntries(searchParams);

  const handleAvailabilityChange = (checkedValues: string[]) => {
    const monetizationTypes = checkedValues.join(',');
    setSearchParams({
      ...searchParamsObj,
      with_watch_monetization_types: monetizationTypes,
      page: '1',
    });
  };

  const handleReleaseCheckboxChange = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  const handleUserScoreChange = (values: number[]) => {
    setUserScoreValues(values);
    setSearchParams(() => ({
      ...searchParamsObj,
      'vote_average.gte': String(values[0]),
      'vote_average.lte': String(values[1]),
      page: '1',
    }));
  };

  const handleMinUserVotesChange = (value: number) => {
    setMinUserVotes(value);
    setSearchParams(() => ({
      ...searchParamsObj,
      'vote_count.gte': String(value),
      page: '1',
    }));
  };

  const handleRuntimeChange = (values: number[]) => {
    setRuntimeValues(values);
    setSearchParams(() => ({
      ...searchParamsObj,
      'with_runtime.gte': String(values[0]),
      'with_runtime.lte': String(values[1]),
      page: '1',
    }));
  };

  return (
    <div className={classNames(styles['filters'], className)}>
      <Paper>
        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Sort Results By
          </Paragraph>
          <Select
            options={[
              { label: 'Popularity Descending', value: 'popularity.desc' },
              { label: 'Popularity Ascending', value: 'popularity.asc' },
              { label: 'Rating Descending', value: 'vote_average.desc' },
              { label: 'Rating Ascending', value: 'vote_average.asc' },
              {
                label: 'First Air Date Descending',
                value: 'first_air_date.desc',
              },
              {
                label: 'First Air Date Ascending',
                value: 'first_air_date.asc',
              },
              { label: 'Name (A-Z)', value: 'name.asc' },
              { label: 'Name (Z-A)', value: 'name.desc' },
            ]}
            searchParam='sort_by'
          />
        </div>

        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Availabilities
          </Paragraph>
          <Checkbox.Group
            options={[
              {
                label: 'Search all availabilities?',
                value: 'flatrate,free,ads,rent,buy',
              },
              { label: 'Stream', value: 'flatrate' },
              { label: 'Free', value: 'free' },
              { label: 'Ads', value: 'ads' },
              { label: 'Rent', value: 'rent' },
              { label: 'Buy', value: 'buy' },
            ]}
            defaultValue={['Search all availabilities?']}
            onChange={handleAvailabilityChange}
          />
        </div>

        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Release Dates
          </Paragraph>
          <Checkbox checked={isChecked} onChange={handleReleaseCheckboxChange}>
            Search all episodes release?
          </Checkbox>
          {isChecked ? (
            <>
              <div className={styles['filters__element-datepicker']}>
                <Paragraph>from</Paragraph>
                <DateFieldFilter searchParam='air_date.gte' />
              </div>
              <div className={styles['filters__element-datepicker']}>
                <Paragraph>to</Paragraph>
                <DateFieldFilter searchParam='air_date.lte' />
              </div>
            </>
          ) : (
            <>
              <Checkbox
                checked={!isChecked}
                onChange={handleReleaseCheckboxChange}>
                Search first episode release?
              </Checkbox>
              <div className={styles['filters__element-datepicker']}>
                <Paragraph>from</Paragraph>
                <DateFieldFilter searchParam='first_air_date.gte' />
              </div>
              <div className={styles['filters__element-datepicker']}>
                <Paragraph>to</Paragraph>
                <DateFieldFilter searchParam='first_air_date.lte' />
              </div>
            </>
          )}
        </div>

        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Genres
          </Paragraph>
          <div className={styles['filters__element-genres']}>
            {tvGenres.map(({ id, name }) => (
              <FilterButton
                isGroup
                key={id}
                searchParam='with_genres'
                value={String(id)}>
                {name}
              </FilterButton>
            ))}
          </div>
        </div>
        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            User Score
          </Paragraph>
          <Slider
            min={0}
            max={10}
            range
            marks={{
              0: '0',
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5',
              6: '6',
              7: '7',
              8: '8',
              9: '9',
              10: '10',
            }}
            defaultValue={[0, 10]}
            onChange={handleUserScoreChange}
          />
        </div>

        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Minimum User Votes
          </Paragraph>
          <Slider
            min={0}
            max={500}
            step={100}
            range={false}
            marks={{
              0: '0',
              100: '100',
              200: '200',
              300: '300',
              400: '400',
              500: '500',
            }}
            defaultValue={0}
            onChange={handleMinUserVotesChange}
          />
        </div>

        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Runtime
          </Paragraph>
          <Slider
            min={0}
            max={400}
            step={15}
            range
            marks={{
              0: '0',
              120: '120',
              240: '240',
              360: '360',
            }}
            defaultValue={[0, 400]}
            onChange={handleRuntimeChange}
          />
        </div>
      </Paper>
    </div>
  );
};
