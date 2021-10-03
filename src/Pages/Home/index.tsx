import {
  ContainerCard,
  ContainerInfoCard,
  Heading,
  Image,
  Main,
  Page,
  Paragraph,
  Section,
  Slider,
  Span,
} from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Card } from "../../Components/Card";
import ImgBackground from "../../Components/Background/index";
import { ModalDetails } from "../../Components/Modal";
import Navbar from "../../Components/Navbar/index";
import { RootState } from "../../Redux/store";
import px2vw from "../../Styles/global";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const { characters } = useSelector((state: RootState) => state.characters);
  const [characterInspect, setCharacterInspect] = useState<Character>(
    {} as Character
  );

  const length = characters.length;

  if (!Array.isArray(characters) || length <= 0) {
    return null;
  }

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 3);
  };

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 3);
  };

  const handleOpenDetails = (id: number) => {
    const character = characters.find(({ id: idList }) => idList === id);

    if (!character) {
      console.log("ERROR, CHARACTERS NOT EXIST");
      return;
    }

    setCharacterInspect(character);
    setIsModalVisible(true);
  };

  return (
    <Page>
      <Main style={isModalVisible ? { opacity: 0.1 } : {}}>
        <Navbar active="Home" />
        <Section>
          <ContainerCard>
            <FaArrowLeft
              onClick={handlePrevSlide}
              style={{ fontSize: px2vw(36), cursor: "pointer" }}
            />
            {characters.map((item, i) => {
              return (
                <Slider currentSlide={i === current ? "slide" : "active"}>
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
                </Slider>
              );
            })}
            <FaArrowRight
              onClick={handleNextSlide}
              style={{ fontSize: px2vw(36), cursor: "pointer" }}
            />
          </ContainerCard>
        </Section>
        <ImgBackground shadow="150%" imgWidth="50%" imgHeight="86vh" />
      </Main>
      {isModalVisible && (
        <ModalDetails
          closeModal={() => setIsModalVisible(false)}
          data={characterInspect}
        />
      )}
    </Page>
  );
};
