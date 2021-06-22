import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Product from './Pages/Product/Product';

function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/product" component={Product} />
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
