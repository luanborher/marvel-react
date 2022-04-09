import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ImgBackground from '../../Components/Background/index';
import {
  Aside,
  Button,
  Div,
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
    <>
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
            <Div>Salvar login</Div>
            <Subli>Esqueci a senha</Subli>
          </Option>
          <Button>Entrar</Button>
          <P>
            Ainda não tem o login?<div>Cadastre-se</div>
          </P>
        </Form>
      </Main>
      <Aside>
        <ImgBackground shadow="100%" imgWidth="100%" imgHeight="100vh" />
      </Aside>
    </>
  );
};
