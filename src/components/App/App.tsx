import { Button } from '../Button';
import { Paragraph } from '../Paragraph';
import { Title } from '../Title';
import ShareIcon from '../../assets/icons/Share.svg';

export function App() {
  return (
    <>
      <Title>Yo!</Title>
      <Paragraph capitals={true} size='xl'>
        Happy couple
      </Paragraph>
      <Button icon={ShareIcon} fill='bgSecondaryFill'>
        Watch movie
      </Button>
    </>
  );
}
