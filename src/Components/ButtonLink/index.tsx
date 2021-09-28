import { ButtonLink } from "./styles";
import { ReactNode } from "react";

interface Content {
  children: ReactNode;
}

const Button = ({ children }: Content) => <ButtonLink>{children}</ButtonLink>;

export default Button;
