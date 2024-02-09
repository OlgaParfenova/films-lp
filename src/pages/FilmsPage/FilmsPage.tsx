import { Paragraph, SearchInput, TextInput } from '../../components';

export const FilmsPage = () => {
  return (
    <>
      <Paragraph>Films Page</Paragraph>
      <TextInput placeholder='Email' />
      <SearchInput placeholder='Введите название фильма' />
    </>
  );
};
