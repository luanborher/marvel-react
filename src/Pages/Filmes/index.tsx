import {
  ContainerCard,
  ContainerInfoCard,
  DropDownContent,
  Heading,
  Image,
  Main,
  Page,
  Paragraph,
  Section,
  Slider,
  Span,
  SubA,
} from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Card } from "../../Components/Card";
import ImgBackground from "../../Components/Background";
import { ModalDetails } from "../../Components/Modal";
import Navbar from "../../Components/Navbar";
import { RootState } from "../../Redux/store";
import px2vw from "../../Styles/global";
import { useSelector } from "react-redux";
import { useState } from "react";

/** @param Character typing a json films */
interface Films {
  id: number;
  title: string;
  text: string;
  image: string;
  apparitions: string[];
  disp: string[];
  note: number;
}

export const Filmes = () => {
  const [current, setCurrent] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { films } = useSelector((state: RootState) => state.films);
  const [filmsInspect, setFilmsInspect] = useState<Films>({} as Films);

  const length = films.length;

  const handleOpenDetails = (id: number) => {
    const film = films.find(({ id: idList }) => idList === id);

    if (!film) {
      console.log("ERROR, CHARACTERS NOT EXIST");
      return;
    }

    setFilmsInspect(film);
    setIsModalVisible(true);
  };

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 3);
  };

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 3);
  };

  return (
    <Page>
      <Main style={isModalVisible ? { opacity: 0.1 } : {}}>
        <Navbar active="Filmes" />
        <Section>
          <DropDownContent>
            <SubA value={""}>Filtrar por</SubA>
            <SubA value={"Lançamento"}>Lançamento</SubA>
            <SubA value={"Cronologia"}>Cronologia</SubA>
          </DropDownContent>
          <ContainerCard>
            {length > 3 && (
              <FaArrowLeft
                onClick={handlePrevSlide}
                style={{ fontSize: px2vw(36), cursor: "pointer" }}
              />
            )}
            {/* mapping card */}
            {films.map((item, i) => {
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
            {length > 3 && (
              <FaArrowRight
                onClick={handleNextSlide}
                style={{ fontSize: px2vw(36), cursor: "pointer" }}
              />
            )}
          </ContainerCard>
        </Section>
        <ImgBackground shadow="150%" imgWidth="50%" imgHeight="86vh" />
      </Main>
      {isModalVisible && (
        <ModalDetails
          closeModal={() => setIsModalVisible(false)}
          data={filmsInspect}
          type={["Disponível em streaming:", "Crítica"]}
        />
      )}
    </Page>
  );
};
