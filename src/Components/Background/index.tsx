import { ImgBackground } from "./styles";
import imageBack from "../../Image/imageFundo.jpeg";

interface ShadowBox {
  shadow: string;
  imgWidth: string;
  imgHeight: string;
}

const Button = ({ shadow, imgWidth, imgHeight }: ShadowBox) => (
  <ImgBackground
    src={imageBack}
    alt="Avengers"
    shadow={shadow}
    imgWidth={imgWidth}
    imgHeight={imgHeight}
  />
);

export default Button;
