import { Main, Page } from './styles';
import Navbar from '../../Components/Navbar/index';

export const Home = () => {
  return (
    <Page>
      <Main>
        <Navbar active="Personagens" />
      </Main>
    </Page>
  );
};
