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
} from "./styles";
import { FormEvent, useState } from "react";

import ImgBackground from "../../Components/Background/index";
import { useHistory } from "react-router";

interface DataLogin {
  user: string;
  password: string;
}

export const Login = () => {
  const history = useHistory();
  const [dataLogin, setDataLogin] = useState<DataLogin>({
    user: "",
    password: "",
  });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const { user, password } = dataLogin;
    if (user && password) {
      history.push("/home");
    }
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
            onChange={(event) =>
              setDataLogin({ ...dataLogin, user: event.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(event) =>
              setDataLogin({ ...dataLogin, password: event.target.value })
            }
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
