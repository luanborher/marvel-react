import { ReactNode } from 'react';
import { Content } from './styles';

interface ContentCard {
  children: ReactNode;
}

export const Card = ({ children }: ContentCard) => {
  return <Content>{children}</Content>;
};
