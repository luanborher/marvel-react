import {Main, Page} from "./styles";

import ImgBackground from "../../Components/Background/index";
import Navbar from "../../Components/Navbar/index";

export const Home = () => {
  return (
    <Page>
      <Main>
        <Navbar active="Home" />
        <ImgBackground shadow="150%" imgWidth="50%" imgHeight="86vh" />
      </Main>
    </Page>
  );
};
