import { Aside } from "./styles";
import ButtonLink from "../../Components/ButtonLink/index";
import ImgBackground from "../../Components/BackgroundImage/index";
import { MainDiv } from "./styles";
import Navbar from "../../Components/Navbar/index";

export const Home = () => {
  return (
    <MainDiv>
      <Navbar>
        <ButtonLink>Personagens</ButtonLink>
        <ButtonLink>Filmes</ButtonLink>
        <ButtonLink>HQs</ButtonLink>
        <ButtonLink>Sair</ButtonLink>
      </Navbar>
      <Aside>
        <ImgBackground shadow="200%" />
      </Aside>
    </MainDiv>
  );
};
