import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  Input,
  Logo,
  Main,
  Option,
  P,
  SubTitle,
  Subli,
  Text,
  Title,
} from './styles';

export interface DataLogin {
  user: string;
  password: string;
}

export const Login = () => {
  const history = useHistory();
  const [dataLogin, setDataLogin] = useState<DataLogin>({
    user: '',
    password: '',
  });

  const handleLogin = () => {
    localStorage.setItem('@Marvel: user', JSON.stringify(dataLogin));
    history.push('/Filmes');
  };

  return (
    <Main>
      <Logo>
        <Text>MARVEL</Text>
      </Logo>
      <Form onSubmit={handleLogin}>
        <Title>Bem-vindo(a) de volta!</Title>
        <SubTitle>Acesse sua conta:</SubTitle>
        <Input
          type="text"
          placeholder="Usuário"
          onChange={event =>
            setDataLogin({ ...dataLogin, user: event.target.value })
          }
          value={dataLogin.user}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={event =>
            setDataLogin({ ...dataLogin, password: event.target.value })
          }
          value={dataLogin.password}
        />
        <Option>
          <div>Salvar login</div>
          <Subli>Esqueci a senha</Subli>
        </Option>
        <Button>Entrar</Button>
        <P>
          Ainda não tem o login?<div>Cadastre-se</div>
        </P>
      </Form>
    </Main>
  );
};
