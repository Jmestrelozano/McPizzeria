import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { authContext } from '../hooks/UseContext';
import { LoginPages } from '../views/LoginPages';
import { PizzaPages } from '../views/PizzaPages';

export const RoutePrincipal = () => {
  const { state } = useContext(authContext);
  const {
    inicioSesion: { login },
  } = state;

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
              <PizzaPages />
            </Route>
          )}

          {login ? (
            <Route exact path="/">
              <PizzaPages />
            </Route>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </Router>
    </>
  );
};
