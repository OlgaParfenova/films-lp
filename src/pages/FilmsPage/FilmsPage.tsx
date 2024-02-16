import {
  DateInput,
  FilmCard,
  Paragraph,
  SearchInput,
  Select,
  TextInput,
} from '../../components';
import Poster from '../../assets/images/1.png';
import { Marks } from '../../components/Slider/Slider.props';
import { Filters } from '../../layouts';

const filmData = [
  {
    title: 'Film Title',
    posterURL: Poster,
    rating: 6.3,
  },
];

const selectData = {
  options: ['One', 'Two', 'Three', 'four', 'five', 'six'],
  current: 'six',
};

const sliderMarks: Marks = {
  0: '0',
  20: '20',
  30: '30',
  100: '100',
  150: '150',
  250: '250',
};

const optionsCheckboxGroup = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const defaultValueCheckboxGroup = ['Apple'];

export const FilmsPage = () => {
  return (
    <>
      <Paragraph>Films Page</Paragraph>
      <TextInput placeholder='Email' />
      <SearchInput placeholder='Введите название фильма' />
      {filmData.map((element) => (
        <FilmCard
          key={element.title}
          title={element.title}
          posterURL={element.posterURL}
          rating={element.rating}
        />
      ))}
      <DateInput />
      <Select options={selectData.options} />
      <Filters />
    </>
  );
};
