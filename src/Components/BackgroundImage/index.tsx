import { ImgBackground } from "../../Components/BackgroundImage/styles";
import imageBack from "../../Image/imageFundo.jpeg";

interface ShadowBox {
  shadow: string;
}

const Button = ({ shadow }: ShadowBox) => (
  <ImgBackground src={imageBack} alt="Avengers" shadow={shadow} />
);

export default Button;
