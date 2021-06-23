import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Product from './Pages/Product/Product';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route exact path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
