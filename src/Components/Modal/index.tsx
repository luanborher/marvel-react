import { FaPlayCircle, FaRegTimesCircle, FaStar } from 'react-icons/fa';
import { Image, ImageMenor } from '../../Pages/Home/styles';
import { Card } from '../Card';
import { px2vw } from '../../Styles/global';
import { ResponseFilmsMarvel } from '../../Hooks/useAuth';

import { ContainerApparition, InfoModal, Modal, Text, Galery } from './styles';

interface Character {
  id: number | undefined;
  data: ResponseFilmsMarvel | undefined;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string[];
}

export const ModalDetails = ({
  id,
  data,
  type,
  setShowModal,
  showModal,
}: Character) => {
  const renderModal = () => {
    if (data) {
      return (
        <>
          <Card>
            <Image src={data.image} alt={data.title} />
          </Card>
          <InfoModal>
            <div>
              <Text size={24} top={35}>
                {data.title}
                <FaPlayCircle
                  size={24}
                  color="white"
                  style={{
                    marginLeft: px2vw(10),
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    window.open(data.link, '_blank');
                  }}
                />
              </Text>

              <Text size={10} top={0}>
                {data.text}
              </Text>

              <ContainerApparition>
                <Text size={22} top={0}>
                  {type[0]}
                </Text>

                <Galery>
                  {data.galery.map(i => (
                    <ImageMenor
                      src={i}
                      alt="Imagem da galeria"
                      style={{ marginRight: px2vw(5) }}
                    />
                  ))}
                </Galery>

                <Text size={22} top={10}>
                  {type[1]}
                </Text>
                <div>
                  {data.note.map(() => (
                    <FaStar
                      size={px2vw(20)}
                      color="#ffd700"
                      style={{ marginRight: px2vw(3) }}
                    />
                  ))}
                </div>
              </ContainerApparition>
            </div>
            <FaRegTimesCircle
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                bottom: px2vw(16),
                right: px2vw(26),
                cursor: 'pointer',
                zIndex: 100,
              }}
              size={px2vw(32)}
            />
          </InfoModal>
        </>
      );
    }

    return null;
  };

  if (showModal) {
    return <Modal key={id ?? 0}>{renderModal()}</Modal>;
  }

  return null;
};
