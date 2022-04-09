import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './routesPrivate';

import { Filmes } from '../Pages/FilmesMarvel/index';
import { Home } from '../Pages/Home/index';
import { Login } from '../Pages/Login/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/Personagens" component={Home} />
      <PrivateRoute path="/Filmes" component={Filmes} />
    </Switch>
    <ToastContainer />
  </BrowserRouter>
);

export default Routes;
