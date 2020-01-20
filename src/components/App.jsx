import React from "react";
import NavigationBar from "./Nav";
import Homepage from "../pages/Homepage";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Basket from "../pages/Basket";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
