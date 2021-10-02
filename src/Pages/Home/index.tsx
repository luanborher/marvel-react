import {
  ContainerCard,
  ContainerInfoCard,
  Heading,
  Image,
  Main,
  Paragraph,
  Section,
  Span,
} from "./styles";

import { Card } from "../../Components/Card";
import ImgBackground from "../../Components/BackgroundImage/index";
import { ModalDetails } from "../../Components/ModalDetails";
import Navbar from "../../Components/Navbar/index";
import { RootState } from "../../Redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";

interface Character {
  id: number;
  title: string;
  text: string;
  image: string;
  apparitions: string[];
  note: number;
}

export const Home = () => {
  const [positionDetails, setPositionDetails] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { characters } = useSelector((state: RootState) => state.characters);
  const [characterInspect, setCharacterInspect] = useState<Character>(
    {} as Character
  );

  const handleOpenDetails = (id: number) => {
    switch (id) {
      case 1:
        setPositionDetails(0);
        break;
      case 2:
        setPositionDetails(23);
        break;
      case 3:
        setPositionDetails(46);
        break;
    }

    const character = characters.find(({ id: idList }) => idList === id);

    if (!character) {
      console.log("ERRO, NOT EXIST");
      return;
    }

    setCharacterInspect(character);
    setIsModalVisible(true);
  };

  return (
    <Main>
      <Navbar active="Home" />
      <Section>
        <ContainerCard>
          {characters.map((item, i) => (
            <Card>
              <Image src={item.image} alt={item.title} />
              <ContainerInfoCard>
                <div>
                  <Heading>{item.title}</Heading>
                  <Paragraph>{item.text}</Paragraph>
                </div>
                <Span onClick={() => handleOpenDetails(item.id)}>
                  ver detalhes
                </Span>
              </ContainerInfoCard>
            </Card>
          ))}
          {isModalVisible && (
            <ModalDetails
              closeModal={() => setIsModalVisible(false)}
              data={characterInspect}
              position={positionDetails}
            />
          )}
        </ContainerCard>
      </Section>
      <ImgBackground shadow="200%" imgWidth="50%" />
    </Main>
  );
};
