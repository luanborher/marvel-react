import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Title, Main, Page, SectionImages, ContentPersona } from './styles';

import Navbar from '../../Components/Navbar/index';
import { useAuth } from '../../Hooks/useAuth';

export const Home = () => {
  const { persona } = useAuth();
  const [show, setShow] = useState(false);

  return (
    <Page>
      <Navbar active="Personagens" />

      <Main>
        <Title>
          Personagens da Fase 4
          {show ? (
            <FaEyeSlash color="white" onClick={() => setShow(false)} />
          ) : (
            <FaEye color="white" onClick={() => setShow(true)} />
          )}
        </Title>

        <SectionImages>
          {persona
            .filter(item => item.faseFour === true)
            .map(item => (
              <ContentPersona
                src={!show ? item.img : item.img2 ?? item.img}
                alt="personagens"
              />
            ))}
        </SectionImages>
      </Main>

      <Main>
        <Title>
          Personagens da Fase 1
          {show ? (
            <FaEyeSlash color="white" onClick={() => setShow(false)} />
          ) : (
            <FaEye color="white" onClick={() => setShow(true)} />
          )}
        </Title>

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
