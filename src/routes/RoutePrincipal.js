import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { authContext } from '../hooks/UseContext';
import { LoginPages } from '../views/LoginPages';

import RouteSecundaria from './RouteSecundaria';

export const RoutePrincipal = () => {
  const { state } = useContext(authContext);
  const {
    inicioSesion: { login },
  } = state;

  sessionStorage.setItem('inicioSeccion', JSON.stringify(state));
  console.log(state, 'rutas');
  return (
    <>
      <Router>
        <Switch>
          {!login ? (
            <Route exact path="/login">
              <LoginPages />
            </Route>
          ) : (
            <Route path="/">
              <RouteSecundaria />
            </Route>
          )}

          {login ? (
            <Route exact path="/">
              <RouteSecundaria />
            </Route>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </Router>
    </>
  );
};
