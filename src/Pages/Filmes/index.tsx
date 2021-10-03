import { Aside } from "./styles";
import ImgBackground from "../../Components/Background/index";
import { MainDiv } from "./styles";
import Navbar from "../../Components/Navbar/index";

export const Filmes = () => {
  return (
    <MainDiv>
      <Navbar active="Filmes" />
      <Aside>
        <ImgBackground shadow="150%" imgWidth="50%" imgHeight="86vh" />
      </Aside>
    </MainDiv>
  );
};
