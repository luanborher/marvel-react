import { Title, Main, Page, SectionImages, ContentPersona } from './styles';

import Navbar from '../../Components/Navbar/index';
import { useAuth } from '../../Hooks/useAuth';

export const Home = () => {
  const { persona } = useAuth();

  return (
    <Page>
      <Navbar active="Personagens" />

      <Main>
        <Title>Personagens da Fase 4</Title>

        <SectionImages>
          {persona
            .filter(item => item.faseFour === true)
            .map(item => (
              <ContentPersona src={item.img} alt="personagens" />
            ))}
        </SectionImages>
      </Main>

      <Main>
        <Title>Personagens da Fase 1</Title>

        <SectionImages>
          {persona
            .filter(item => item.faseOne === true)
            .map(item => (
              <ContentPersona src={item.img} alt="personagens" />
            ))}
        </SectionImages>
      </Main>
    </Page>
  );
};
