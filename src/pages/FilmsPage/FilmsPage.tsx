import {
  DateInput,
  FilmCard,
  Paragraph,
  SearchInput,
  Select,
  Slider,
  TextInput,
} from '../../components';
import Poster from '../../assets/images/1.png';

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
      <Slider
        min={0}
        max={50}
        step={10}
        numValues={5}
        valueName='Number of reviews'
      />
    </>
  );
};
