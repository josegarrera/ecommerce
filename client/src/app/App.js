import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/presentationals/navBar/NavBar.js";
import Catalogue from "../components/containers/catalogue/Catalogue";
import FormProduct from "../components/containers/formProduct/FormProduct";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route path="/" component={NavBar} />
        <Route exact path="/catalogue" component={Catalogue} />
        <Route exact path="/add-product" component={FormProduct} />
      </React.Fragment>
    </div>
  );
}

export default App;
