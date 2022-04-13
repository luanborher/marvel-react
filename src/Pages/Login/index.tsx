import { useHistory } from 'react-router-dom';
import { Button, Form, Logo, Main, Text } from './styles';

export interface DataLogin {
  user: string;
  password: string;
}

export const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/Filmes');
  };

  return (
    <Main>
      <Logo>
        <Text>MARVEL</Text>
      </Logo>
      <Form onSubmit={handleLogin}>
        <Button>Entrar</Button>
      </Form>
    </Main>
  );
};
