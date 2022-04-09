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
import ImgBackground from "../../Components/Background";
import { ModalDetails } from "../../Components/Modal";
import Navbar from "../../Components/Navbar";
import {px2vw} from "../../Styles/global";
import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { ResponseFilmsMarvel } from '../../Hooks/useAuth'

export const Filmes = () => {
  const [current, setCurrent] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filmsInspect, setFilmsInspect] = useState<ResponseFilmsMarvel>();
  const { films } = useAuth();
  const [length] = useState(films.length);

  const handleOpenDetails = (data: ResponseFilmsMarvel) => {
    setFilmsInspect(data);
    setIsModalVisible(true);
  };

  const handleNextSlide = () => {
    setCurrent(current === length - 3 ? current : current + 1);
  };

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  return (
    <Page>
      <Main style={isModalVisible ? { opacity: 0.1 } : {}}>
        <Navbar active="Filmes" />
        <Section>
          <ContainerCard>
            {current !== 0 ? (
              <FaArrowLeft
                onClick={handlePrevSlide}
                style={{ fontSize: px2vw(36), cursor: "pointer" }}
              />
            ) : (
              <FaArrowLeft
                style={{ fontSize: px2vw(36), cursor: "auto", opacity: 0 }}
              />
            )}
            {films.map((item, index) => {
              if (index >= current && index < current + 3) {
                return (
                  <Slider currentSlide={"active"}>
                  <Card>
                    <Image src={item.image} alt={item.title} />
                    <ContainerInfoCard>
                      <div>
                        <Heading>{item.title}</Heading>
                        <Paragraph>{item.text}</Paragraph>
                      </div>
                      <Span onClick={() => handleOpenDetails(item)}>
                        ver detalhes
                      </Span>
                    </ContainerInfoCard>
                  </Card>
                </Slider>
                );
              }
            })}
            {current !== length - 3 && length > 3 ? (
              <FaArrowRight
                onClick={handleNextSlide}
                style={{ fontSize: px2vw(36), cursor: "pointer" }}
              />
            ) : (
              <FaArrowRight
              style={{ fontSize: px2vw(36), cursor: "auto", opacity: 0 }}
            />
            )}
          </ContainerCard>
        </Section>
        <ImgBackground shadow="150%" imgWidth="50%" imgHeight="86vh" />
      </Main>
      {isModalVisible && (
        <ModalDetails
          setShowModal={setIsModalVisible}
          data={filmsInspect}
          type={["Disponível em streaming:", "Crítica"]}
        />
      )}
    </Page>
  );
};
