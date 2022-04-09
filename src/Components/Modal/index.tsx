import {
  ContainerApparition,
  Div,
  InfoModal,
  ListApparition,
  Modal,
  Text,
} from "./styles";
import { Image, ImageMenor } from "../../Pages/Home/styles";

import { Card } from "../Card";
import { FaRegTimesCircle } from "react-icons/fa";
import {px2vw} from "../../Styles/global";

import { ResponseFilmsMarvel } from '../../Hooks/useAuth'

interface Character {
  data: ResponseFilmsMarvel| undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  type: string[];
}

export const ModalDetails = ({ data, type, setShowModal }: Character) => {
  const renderModal = () => {
    if (data) {
      return (
        <>
      <Card>
        <Image src={data.image} alt={data.title} />
      </Card>
      <InfoModal>
        <Div>
          <Text size={24} top={35}>
            {data.title}
          </Text>
          {type[1] === "Crítica" && (
            <Text size={10} top={0}>
              {data.text}
            </Text>
          )}
          <ContainerApparition>
            <Text size={18} top={0}>
              {type[0]}
            </Text>
            {data.apparitions.map(
              (i) =>
                type[1] !== "Crítica" && <ListApparition>{i}</ListApparition>
            )}
            {data.disp.map((i) => (
              <ImageMenor src={i} alt="Avangens" />
            ))}

            <Text size={22} top={20}>
              {type[1]}
            </Text>
            <Div>
              {data.note}
            </Div>
          </ContainerApparition>
        </Div>
        <FaRegTimesCircle
          onClick={() => setShowModal(false)}
          style={{
            position: "absolute",
            bottom: px2vw(16),
            right: px2vw(26),
            cursor: "pointer",
            zIndex: 100,
          }}
          size={px2vw(32)}
        />
      </InfoModal>
    </>
      );
        }

      return null
  }

  return  <Modal>{renderModal()}</Modal>

};
