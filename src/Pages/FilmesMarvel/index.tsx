import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
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
} from './styles';

import { Card } from '../../Components/Card';
import { ModalDetails } from '../../Components/Modal';
import Navbar from '../../Components/Navbar';
import { px2vw } from '../../Styles/global';
import { useAuth, ResponseFilmsMarvel } from '../../Hooks/useAuth';

export const Filmes = () => {
  const [currentOne, setCurrentOne] = useState(0);
  const [currentFour, setCurrentFour] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filmsInspect, setFilmsInspect] = useState<ResponseFilmsMarvel>();
  const { films } = useAuth();

  const handleOpenDetails = (data: ResponseFilmsMarvel) => {
    setFilmsInspect(data);
    setIsModalVisible(true);
  };

  const handleNextSlideOne = () => {
    setCurrentOne(
      currentOne === films.filter(item => item.fase === 1).length - 4
        ? currentOne
        : currentOne + 1,
    );
  };

  const handlePrevSlideOne = () => {
    setCurrentOne(currentOne === 0 ? 0 : currentOne - 1);
  };

  const handleNextSlideFour = () => {
    setCurrentFour(
      currentFour === films.filter(item => item.fase === 4).length - 4
        ? currentFour
        : currentFour + 1,
    );
  };

  const handlePrevSlideFour = () => {
    setCurrentFour(currentFour === 0 ? 0 : currentFour - 1);
  };

  const renderFaseOne = () => {
    return films
      .filter(item => item.fase === 1)
      .map((film, index) => {
        if (index >= currentOne && index < currentOne + 4) {
          return (
            <Slider currentSlide="active" key={+index}>
              <Card>
                <Image src={film.image} alt={film.title} />
                <ContainerInfoCard>
                  <div>
                    <Heading>{film.title}</Heading>
                    <Paragraph>{film.text}</Paragraph>
                  </div>
                  <Span onClick={() => handleOpenDetails(film)}>
                    ver detalhes
                  </Span>
                </ContainerInfoCard>
              </Card>
            </Slider>
          );
        }

        return null;
      });
  };

  const renderFaseFour = () => {
    return films
      .filter(item => item.fase === 4)
      .map((film, index) => {
        if (index >= currentFour && index < currentFour + 4) {
          return (
            <Slider currentSlide="active" key={+index}>
              <Card>
                <Image src={film.image} alt={film.title} />
                <ContainerInfoCard>
                  <div>
                    <Heading>{film.title}</Heading>
                    <Paragraph>{film.text}</Paragraph>
                  </div>
                  <Span onClick={() => handleOpenDetails(film)}>
                    ver detalhes
                  </Span>
                </ContainerInfoCard>
              </Card>
            </Slider>
          );
        }

        return null;
      });
  };

  const renderArrowLeftOne = () => {
    return currentOne === 0 ? (
      <FaArrowLeft
        style={{ fontSize: px2vw(36), cursor: 'auto', opacity: 0 }}
      />
    ) : (
      <FaArrowLeft
        onClick={handlePrevSlideOne}
        style={{ fontSize: px2vw(36), cursor: 'pointer' }}
      />
    );
  };

  const renderArrowRightOne = () => {
    return currentOne !== films.filter(item => item.fase === 1).length - 4 &&
      films.filter(item => item.fase === 1).length > 4 ? (
      <FaArrowRight
        onClick={handleNextSlideOne}
        style={{ fontSize: px2vw(36), cursor: 'pointer' }}
      />
    ) : (
      <FaArrowRight
        style={{ fontSize: px2vw(36), cursor: 'auto', opacity: 0 }}
      />
    );
  };

  const renderArrowLeftFour = () => {
    return currentFour === 0 ? (
      <FaArrowLeft
        style={{ fontSize: px2vw(36), cursor: 'auto', opacity: 0 }}
      />
    ) : (
      <FaArrowLeft
        onClick={handlePrevSlideFour}
        style={{ fontSize: px2vw(36), cursor: 'pointer' }}
      />
    );
  };

  const renderArrowRightFour = () => {
    return currentFour !== films.filter(item => item.fase === 4).length - 4 &&
      films.filter(item => item.fase === 4).length > 4 ? (
      <FaArrowRight
        onClick={handleNextSlideFour}
        style={{ fontSize: px2vw(36), cursor: 'pointer' }}
      />
    ) : (
      <FaArrowRight
        style={{ fontSize: px2vw(36), cursor: 'auto', opacity: 0 }}
      />
    );
  };

  return (
    <Page>
      <Main style={isModalVisible ? { opacity: 0.1 } : {}}>
        <Navbar active="Filmes" />

        <div className="main-component">
          <div className="title">
            Universo Cinematográfico da Marvel: Fase 4
          </div>
          <Section>
            <ContainerCard>
              {renderArrowLeftFour()}
              {renderFaseFour()}
              {renderArrowRightFour()}
            </ContainerCard>
          </Section>
        </div>

        <div className="main-component">
          <div className="title">
            Universo Cinematográfico da Marvel: Fase 1
          </div>
          <Section>
            <ContainerCard>
              {renderArrowLeftOne()}
              {renderFaseOne()}
              {renderArrowRightOne()}
            </ContainerCard>
          </Section>
        </div>
      </Main>
      <ModalDetails
        id={filmsInspect?.id}
        setShowModal={setIsModalVisible}
        showModal={isModalVisible}
        data={filmsInspect}
        type={['Galeria de fotos:', 'Avaliação']}
      />
    </Page>
  );
};
