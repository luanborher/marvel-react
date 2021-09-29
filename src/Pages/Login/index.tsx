import { FormEvent, useState } from "react";

import { Aside } from "./styles";
import { Form } from "./styles";
import ImgBackground from "../../Components/BackgroundImage/index";
import { Logo } from "./styles";
import { Main } from "./styles";
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
    <div id="page-login">
      <Main>
        <Logo>
          <h1>MARVEL</h1>
        </Logo>
        <Form onSubmit={handleLogin}>
          <label className="title">Bem-vindo(a) de volta!</label>
          <label className="sub-title">Acesse sua conta:</label>
          <input
            type="text"
            placeholder="Usuário"
            onChange={(event) =>
              setDataLogin({ ...dataLogin, user: event.target.value })
            }
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(event) =>
              setDataLogin({ ...dataLogin, password: event.target.value })
            }
          />
          <div className="options">
            <div>Salvar login</div>
            <div className="sublin">Esqueci a senha</div>
          </div>
          <button type="submit">Entrar</button>
          <p>
            Ainda não tem o login?<div>Cadastre-se</div>
          </p>
        </Form>
      </Main>
      <Aside>
        <ImgBackground shadow="100%" />
      </Aside>
    </div>
  );
};
