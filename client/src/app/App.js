import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/presentationals/navBar/NavBar.js";
import Catalogue from "../components/containers/catalogue/Catalogue";
import FormProduct from "../components/containers/formProduct/FormProduct";
import Search from "../components/containers/search/Search";
import ProductDetail from "../components/containers/productDetail/ProductDetail";
import Cart from "../components/containers/cart/Cart.js";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route path="/" component={NavBar} />
        <Route exact path="/catalogue" component={Catalogue} />
        <Route exact path="/create" component={FormProduct} />
        <Route exact path="/cart" component={Cart} />

        <Route
          exact
          path="/products/name/:name"
          render={({ match }) => <Search name={match.params.name} />}
        />

        <Route
          exact
          path="/products/id/:id"
          render={({ match }) => <ProductDetail id={match.params.id} />}
        />
      </React.Fragment>
    </div>
  );
}

export default App;
