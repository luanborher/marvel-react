import { Aside, ContentCard, MainDiv, PositionCard } from "./styles";

import { Card } from "../../Components/Card";
import ImgBackground from "../../Components/BackgroundImage/index";
import Navbar from "../../Components/Navbar/index";

export const Home = () => {
  return (
    <MainDiv>
      <Navbar active="Home" />
      <Aside>
        <PositionCard>
          <ContentCard>
            <Card>
              <img src="" alt="teste" />
            </Card>
            <Card>
              <img src="" alt="teste" />
            </Card>
            <Card>
              <img src="" alt="teste" />
            </Card>
          </ContentCard>
        </PositionCard>
        <ImgBackground shadow="200%" imgWidth="50%" />
      </Aside>
    </MainDiv>
  );
};

// EXEMPLO
// export const ListaPersonagem = [
//   { Nome: "Wanda", Aparicoes: "adqweqwe", avaliacao: "blablabla" },
// ];
