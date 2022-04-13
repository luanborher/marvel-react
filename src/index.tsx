import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';
import GlobalStyle from './Styles/global';
import AuthProvider from './Hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
