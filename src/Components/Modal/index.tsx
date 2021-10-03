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
import { RatingView } from "react-simple-star-rating";
import px2vw from "../../Styles/global";

interface Character {
  data: {
    id: number;
    title: string;
    text: string;
    image: string;
    apparitions: string[];
    disp: string[];
    note: number;
  };
  closeModal: () => void;
  type: string[];
}

export const ModalDetails = ({ data, type, closeModal }: Character) => {
  return (
    <Modal>
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
