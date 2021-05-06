import React from "react";
import {Route} from "react-router-dom";
import NavBar from "../components/presentationals/navBar/NavBar.js"
import Catalogue from "../components/containers/catalogue/Catalogue"

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route path="/" component={NavBar} />
        <Route exact path="/catalogue" component={Catalogue} />

        
        
      </React.Fragment>
    </div>
  );
}

export default App;
