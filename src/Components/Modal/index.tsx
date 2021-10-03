import {
  ContainerApparition,
  Div,
  InfoModal,
  ListApparition,
  Modal,
  Text,
} from "./styles";

import { Card } from "../Card";
import { FaRegTimesCircle } from "react-icons/fa";
import { Image } from "../../Pages/Home/styles";
import { RatingView } from "react-simple-star-rating";
import px2vw from "../../Styles/global";

interface Character {
  data: {
    id: number;
    title: string;
    text: string;
    image: string;
    apparitions: string[];
    note: number;
  };
  closeModal: () => void;
}

export const ModalDetails = ({ data, closeModal }: Character) => {
  return (
    <Modal>
      <Card>
        <Image src={data.image} alt={data.title} />
      </Card>
      <InfoModal>
        <Div>
          <Text size={26} top={38}>
            {data.title}
          </Text>
          <ContainerApparition>
            <Text size={18} top={0}>
              Aparições:
            </Text>
            {data.apparitions.map((i) => (
              <ListApparition>{i}</ListApparition>
            ))}
            <Text size={22} top={50}>
              Avaliações dos Fãs
            </Text>
            <Div>
              <RatingView
                ratingValue={data.note}
                fillColor={"#FF9C00"}
                size={px2vw(32)}
              />
            </Div>
          </ContainerApparition>
        </Div>
        <FaRegTimesCircle
          onClick={closeModal}
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
    </Modal>
  );
};
