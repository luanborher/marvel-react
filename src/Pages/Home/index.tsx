import { Aside } from "./styles";
import ImgBackground from "../../Components/BackgroundImage/index";
import { MainDiv } from "./styles";
import Navbar from "../../Components/Navbar/index";

export const Home = () => {
  return (
    <MainDiv>
      <Navbar active="Home" />
      <Aside>
        <ImgBackground shadow="200%" />
      </Aside>
    </MainDiv>
  );
};
