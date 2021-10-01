import { InfoModal, ListApparition, Modal } from "./styles";

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
        <p>{data.title}</p>
        <div>
          Aparições:
          {data.apparitions.map((i) => (
            <ListApparition>{i}</ListApparition>
          ))}
        </div>
        Avaliações dos Fãs
        <RatingView ratingValue={data.note} size={36} />
        <span onClick={closeModal}>FECHAR</span>
      </InfoModal>
    </Modal>
  );
};
