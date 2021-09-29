import { Aside } from "./styles";
import ImgBackground from "../../Components/BackgroundImage/index";
import { MainDiv } from "./styles";
import Navbar from "../../Components/Navbar/index";

export const Hqs = () => {
  return (
    <MainDiv>
      <Navbar active="Hqs" />
      <Aside>
        <ImgBackground shadow="200%" imgWidth="50%" />
      </Aside>
    </MainDiv>
  );
};
