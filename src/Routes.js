import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import Product from './Pages/Product/Product';
import MapPage from './Pages/Map/MapPage';

function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/rooms/:id" component={Product} />
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/map" component={MapPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default Routes;
