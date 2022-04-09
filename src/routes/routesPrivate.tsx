/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../Services/auth';

interface Props {
  component: any;
  path: string;
}

const PrivateRoute = ({ component: Component, path }: Props) => {
  return (
    <Route
      path={path}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
