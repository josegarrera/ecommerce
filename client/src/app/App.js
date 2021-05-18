import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import GridLayout from "../utils/GridLayout";
//import {GlobalStyles} from './GlobalStyles';
import NavBar from "../components/presentationals/navBar/NavBar.js";
import Home from "../components/containers/home/Home.js";
import Catalogue from "../components/containers/catalogue/Catalogue";
import FormProduct from "../components/containers/formProduct/FormProduct";
import Search from "../components/containers/search/Search";
import ProductDetail from "../components/containers/productDetail/ProductDetail";
import Cart from "../components/containers/cart/Cart.js";
import FormLogging from "../components/containers/formLogging/FormLogging";
import FormSignup from "../components/containers/formSignup/FormSignup";
import FomrCategories from "../components/containers/formCategories/FormCategories";
import ShippingAddress from "../components/containers/shippingAddress/shippingAddress";
import PaymentInformation from "../components/containers/paymentInformation/paymentInformation";
import ConfirmOrder from "../components/containers/confirmOrder/confirmOrder";

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {
  const user = useSelector((state) => state.user);
	return (
		<div className='App'>
			<React.Fragment>
				<GridLayout>
					{/* <GlobalStyles /> */}
					<ReactNotification />
					<Route path='/' component={NavBar} />
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={FormLogging} />
					<Route exact path='/signup' component={FormSignup} />
					<Route exact path='/catalogue' component={Catalogue} />
					{user.role === 'admin' ? (
						<Route exact path='/create' component={FormProduct} />
					) : null}

          <Route exact path="/categorie" component={FomrCategories} />
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

          <Route path="/shipping" component={ShippingAddress}></Route>
          <Route path="/payment" component={PaymentInformation}></Route>
          <Route path="/confirmation" component={ConfirmOrder}></Route>
        </GridLayout>
      </React.Fragment>
    </div>
  );
}

export default App;
