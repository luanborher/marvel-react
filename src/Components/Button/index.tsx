import { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonLink } from './styles';

interface Content {
  children: ReactNode;
  route: string;
  active: boolean;
}

const Button = ({ children, route, active }: Content) => {
  const history = useHistory();

  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push(route);
  };

  return (
    <ButtonLink active={active} onClick={handleNavigation}>
      {children}
    </ButtonLink>
  );
};

export default Button;
