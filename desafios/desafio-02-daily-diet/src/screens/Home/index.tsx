import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Meals } from '../../components/Meals';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Banner />

      <Meals />
    </Container>
  );
}
