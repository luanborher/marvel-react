import { Aside } from "./styles";
import { Card } from "../../Components/Card";
import { ContentCard } from "./styles";
import ImgBackground from "../../Components/BackgroundImage/index";
import { MainDiv } from "./styles";
import Navbar from "../../Components/Navbar/index";
import { PositionCard } from "./styles";
import teste from "../../Image/imageFundo.jpeg";

interface IDataCard {
  name: string;
  id: string;
}

export const Home = () => {
  return (
    <MainDiv>
      <Navbar active="Home" />
      <Aside>
        <PositionCard>
          <ContentCard>
            <Card>
              <img src={teste} alt="teste" />
            </Card>
            <Card>
              <img src={teste} alt="teste" />
            </Card>
            <Card>
              <img src={teste} alt="teste" />
            </Card>
          </ContentCard>
        </PositionCard>
        <ImgBackground shadow="200%" imgWidth="50%" />
      </Aside>
    </MainDiv>
  );
};

export const ListaPersonagem = [
  { Nome: "Wanda", Aparicoes: "adqweqwe", avaliacao: "blablabla" },
];
