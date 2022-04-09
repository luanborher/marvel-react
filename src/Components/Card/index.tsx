import { Content } from "./styles";
import { ReactNode } from "react";

interface ContentCard {
  children: ReactNode;
}

export const Card = ({ children }: ContentCard) => {
  return <Content>{children}</Content>;
};
