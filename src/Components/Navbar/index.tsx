import {
  Close,
  HeaderNavbar,
  Image,
  Links,
  Logo,
  Navigation,
  TextLogo,
} from "./styles";

import ButtonLink from "../Button";
import Perfil from "../../Image/perfil.png";

interface Props {
  active: string;
}

const Navbar = ({ active }: Props) => (
  <HeaderNavbar>
    <Logo>
      <TextLogo>MARVEL</TextLogo>
    </Logo>
    <Navigation>
      <Links>
        <ButtonLink active={active === "Home" ? true : false} route="Home">
          Personagens
        </ButtonLink>
        <ButtonLink active={active === "Filmes" ? true : false} route="Filmes">
          Filmes
        </ButtonLink>
        <Close>
          <Image src={Perfil} alt="perfil" />
          <ButtonLink active={active === "" ? true : false} route="">
            Sair
          </ButtonLink>
        </Close>
      </Links>
    </Navigation>
  </HeaderNavbar>
);

export default Navbar;
