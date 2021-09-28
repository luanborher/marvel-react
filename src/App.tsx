import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Filmes } from "./Pages/Filmes/index";
import { Home } from "./Pages/Home/index";
import { Hqs } from "./Pages/Hqs/index";
import { Login } from "./Pages/Login/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/filmes" exact component={Filmes} />
        <Route path="/hqs" exact component={Hqs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
