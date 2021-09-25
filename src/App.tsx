import "./Styles/teste.scss";

import { AuthContext } from "./Context/AuthContext";
import React from "react";
import imageBack from "./Image/imageFundo.jpeg";

function App() {
  const user = "";
  const pass = "";

  return (
    <div id="page-login">
      <main>
        <div className="logo">
          <h1>MARVEL</h1>
        </div>
        <form>
          <label className="title">Bem-vindo(a) de volta!</label>
          <label className="sub-title">Acesse sua conta:</label>
          <input type="email" placeholder="Usuário" value={user} />
          <input type="email" placeholder="Senha" value={pass} />
          <div className="options">
            <div>Salvar login</div>
            <div className="sublin">Esqueci a senha</div>
          </div>
          <button type="submit">Entrar</button>
          <p>
            Ainda não tem o login?<div>Cadastre-se</div>
          </p>
        </form>
      </main>
      <aside>
        <img src={imageBack} alt="Avangers" />
      </aside>
    </div>
  );
}

export default App;
