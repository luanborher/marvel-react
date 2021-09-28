import ButtonLink from "../ButtonLink";
import { HeaderNavbar } from "./styles";
import { Links } from "./styles";
import { Logo } from "./styles";
import { Navigation } from "./styles";
import { TextLogo } from "./styles";

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
        <ButtonLink active={active === "hqs" ? true : false} route="hqs">
          HQs
        </ButtonLink>
        <ButtonLink active={active === "" ? true : false} route="">
          Sair
        </ButtonLink>
      </Links>
    </Navigation>
  </HeaderNavbar>
);

export default Navbar;
