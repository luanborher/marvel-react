import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./Pages/Home/index";
import { Login } from "./Pages/Login/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
