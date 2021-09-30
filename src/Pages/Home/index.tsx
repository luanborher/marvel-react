import {
  Aside,
  ContentCard,
  MainDiv,
  ModalDetails,
  PositionCard,
} from "./styles";

import { Card } from "../../Components/Card";
import ImgBackground from "../../Components/BackgroundImage/index";
import Navbar from "../../Components/Navbar/index";
import charactersList from "../../Container/CharactersList";
import { useState } from "react";

export const Home = () => {
  // const [details, setDetails] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenDetails = (id: number) => {
    console.log(id);
    setIsModalVisible(true);
  };

  const handleCloseDetails = () => {
    setIsModalVisible(false);
  };

  return (
    <MainDiv>
      <Navbar active="Home" />
      <Aside>
        <PositionCard>
          <ContentCard>
            <div className="teste">
              {charactersList.map((item, i) => (
                <Card>
                  <img src={item.image} alt="teste" />
                  <div className="containerInfo">
                    <div>
                      <h1>{item.title}</h1>
                      <p>{item.text}</p>
                    </div>
                    <span onClick={() => handleOpenDetails(item.id)}>
                      ver detalhes
                    </span>
                  </div>
                </Card>
              ))}
              {isModalVisible ? (
                <ModalDetails>
                  <span onClick={() => handleCloseDetails()}>FECHAR</span>
                </ModalDetails>
              ) : null}
            </div>
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
