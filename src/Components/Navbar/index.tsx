import { HeaderNavbar } from "./styles";
import { Links } from "./styles";
import { Logo } from "./styles";
import { Navigation } from "./styles";
import { TextLogo } from "./styles";

const Navbar = () => (
  <HeaderNavbar>
    <Logo>
      <TextLogo>MARVEL</TextLogo>
    </Logo>
    <Navigation>
      <Links>Personagens</Links>
      <Links>Filmes</Links>
      <Links>HQs</Links>
      <Links>Sair</Links>
    </Navigation>
  </HeaderNavbar>
);

export default Navbar;
