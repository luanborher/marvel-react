import { HeaderNavbar, Links, Logo, Navigation, TextLogo } from "./styles";

import ButtonLink from "../Button";

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
        <ButtonLink active={active === "Hqs" ? true : false} route="hqs">
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
