import { ImgBackground } from "../../Components/BackgroundImage/styles";
import imageBack from "../../Image/imageFundo.jpeg";

interface ShadowBox {
  shadow: string;
  imgWidth: string;
}

const Button = ({ shadow, imgWidth }: ShadowBox) => (
  <ImgBackground
    src={imageBack}
    alt="Avengers"
    shadow={shadow}
    imgWidth={imgWidth}
  />
);

export default Button;
