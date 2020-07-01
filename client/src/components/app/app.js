import React from 'react';
import 'materialize-css';
import {Switch, Route} from 'react-router-dom'
import CatalogPage from "../../pages/catalog-page";
import CartPage from "../../pages/cart-page";

function App() {
  return (
      <Switch>
        <Route
            path="/"
            component={CatalogPage}
            exact />
        <Route
            path="/cart"
            component={CartPage}
        />
      </Switch>
  );
}

export default App;
