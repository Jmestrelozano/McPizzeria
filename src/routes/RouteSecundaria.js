import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DetailsPages } from '../views/DetailsPages.js';
import { PizzaPages } from '../views/PizzaPages';

export default function RouteSecundaria() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PizzaPages />
        </Route>
        <Route exact path="/details/:id">
          <DetailsPages />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
