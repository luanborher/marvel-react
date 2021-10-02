import { InfoModal, ListApparition, Modal, Text } from "./styles";

import { Card } from "../Card";
import { RatingView } from "react-simple-star-rating";

interface Character {
  data: {
    id: number;
    title: string;
    text: string;
    image: string;
    apparitions: string[];
    note: number;
  };
  position: number;
  closeModal: () => void;
}

export const ModalDetails = ({ data, position, closeModal }: Character) => {
  return (
    <Modal position={position}>
      <Card>
        <img src={data.image} alt={data.title} />
      </Card>
      <InfoModal>
        <Text size={26} top={38}>
          {data.title}
        </Text>
        <div style={{ padding: "16px 0" }}>
          <Text size={18} top={0}>
            Aparições:
          </Text>
          {data.apparitions.map((i) => (
            <ListApparition>{i}</ListApparition>
          ))}
          <Text size={22} top={50} style={{ marginBottom: "8px" }}>
            Avaliações dos Fãs
          </Text>
          <RatingView ratingValue={data.note} fillColor={"#FF9C00"} size={26} />
        </div>
        <span
          onClick={closeModal}
          style={{
            position: "absolute",
            bottom: 16,
            right: 26,
            cursor: "pointer",
          }}
        >
          X
        </span>
      </InfoModal>
    </Modal>
  );
};
