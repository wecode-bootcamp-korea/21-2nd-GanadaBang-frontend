import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
