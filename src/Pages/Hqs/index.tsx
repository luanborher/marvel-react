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
import { RootState } from "../../Redux/store";
import px2vw from "../../Styles/global";
import { useSelector } from "react-redux";
import { useState } from "react";

interface Hq {
  id: number;
  title: string;
  text: string;
  image: string;
  apparitions: string[];
  disp: string[];
  note: number;
}

export const Hqs = () => {
  const [current, setCurrent] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { hqs } = useSelector((state: RootState) => state.hqs);
  const [hqsInspect, setHqsInspect] = useState<Hq>({} as Hq);

  const length = hqs.length;

  const handleOpenDetails = (id: number) => {
    const hq = hqs.find(({ id: idList }) => idList === id);

    if (!hq) {
      console.log("ERROR, CHARACTERS NOT EXIST");
      return;
    }

    setHqsInspect(hq);
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
        <Navbar active="Hqs" />
        <Section>
          <ContainerCard>
            {length > 3 && (
              <FaArrowLeft
                onClick={handlePrevSlide}
                style={{ fontSize: px2vw(36), cursor: "pointer" }}
              />
            )}
            {hqs.map((item, i) => {
              return (
                <Slider currentSlide={i === current ? "active" : "active"}>
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
          data={hqsInspect}
          type={["Disponível para compra:", "Crítica"]}
        />
      )}
    </Page>
  );
};
