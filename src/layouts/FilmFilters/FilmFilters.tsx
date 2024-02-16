import { FC, useState } from 'react';
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Slider } from 'antd';
import { Button, DateInput, Paragraph, Select } from '../../components';
import { Paper } from '../Paper';
import styles from './FilmFilters.module.css';
import { FilmFiltersProps } from './FilmFilters.props';
import classNames from 'classnames';

export const FilmFilters: FC<FilmFiltersProps> = ({ className }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
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
              'Popularity Descending',
              'Popularity Ascending',
              'Rating Descending',
              'Rating Ascending',
              'Release Date Descending',
              'Release Date Ascending',
              'Title (A-Z)',
              'Title (Z-A)',
            ]}
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
                value: 'Search all availabilities?',
              },
              { label: 'Stream', value: 'Stream' },
              { label: 'Free', value: 'Free' },
              { label: 'Ads', value: 'Ads' },
              { label: 'Rent', value: 'Rent' },
              { label: 'Buy', value: 'Buy' },
            ]}
            defaultValue={['Search all availabilities?']}
          />
        </div>

        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Release Dates
          </Paragraph>
          <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
            Search all releases?
          </Checkbox>
          {!isChecked && (
            <Checkbox.Group
              options={[
                {
                  label: 'Theatrical (limited)',
                  value: 'Theatrical (limited)',
                },
                { label: 'Theatrical', value: 'Theatrical' },
                { label: 'Premiere', value: 'Premiere' },
                { label: 'Digital', value: 'Digital' },
                { label: 'Physical', value: 'Physical' },
                { label: 'TV', value: 'TV' },
              ]}
              defaultValue={['Search all releases?']}
            />
          )}
          <div className={styles['filters__element-datepicker']}>
            <Paragraph>from</Paragraph>
            <DateInput />
          </div>
          <div className={styles['filters__element-datepicker']}>
            <Paragraph>to</Paragraph>
            <DateInput />
          </div>
        </div>

        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Genres
          </Paragraph>
          <div className={styles['filters__element-genres']}>
            <Button size='extra-small'>Action</Button>
            <Button size='extra-small'>Adventure</Button>
            <Button size='extra-small'>Animation</Button>
            <Button size='extra-small'>Comedy</Button>
            <Button size='extra-small'>Crime</Button>
            <Button size='extra-small'>Documentary</Button>
            <Button size='extra-small'>Drama</Button>
            <Button size='extra-small'>Family</Button>
            <Button size='extra-small'>Fantasy</Button>
            <Button size='extra-small'>History</Button>
            <Button size='extra-small'>Horror</Button>
            <Button size='extra-small'>Music</Button>
            <Button size='extra-small'>Mystery</Button>
            <Button size='extra-small'>Romance</Button>
            <Button size='extra-small'>Science Fiction</Button>
            <Button size='extra-small'>TV Movie</Button>
            <Button size='extra-small'>Thriller</Button>
            <Button size='extra-small'>War</Button>
            <Button size='extra-small'>Western</Button>
          </div>
        </div>

        <div className={styles['filters__element']}>
          <Paragraph size='m' className={styles['filters__element-title']}>
            Certification
          </Paragraph>
          <div className={styles['filters__element-certification']}>
            <Button size='extra-small'>0</Button>
            <Button size='extra-small'>6</Button>
            <Button size='extra-small'>12</Button>
            <Button size='extra-small'>16</Button>
            <Button size='extra-small'>18</Button>
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
          />
        </div>
      </Paper>
    </div>
  );
};
