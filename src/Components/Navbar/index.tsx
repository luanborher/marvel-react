import { HeaderNavbar } from "./styles";
import { Links } from "./styles";
import { Logo } from "./styles";
import { Navigation } from "./styles";
import { ReactNode } from "react";
import { TextLogo } from "./styles";

interface TextLink {
  children: ReactNode;
}

const Navbar = ({ children }: TextLink) => (
  <HeaderNavbar>
    <Logo>
      <TextLogo>MARVEL</TextLogo>
    </Logo>
    <Navigation>
      <Links>{children}</Links>
    </Navigation>
  </HeaderNavbar>
);

export default Navbar;
