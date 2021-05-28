import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import GridLayout from '../utils/GridLayout';
//import {GlobalStyles} from './GlobalStyles';
import NavBar from '../components/presentationals/navBar/NavBar.js';
import Home from '../components/containers/home/Home.js';
import Catalogue from '../components/containers/catalogue/Catalogue';
import Search from '../components/containers/search/Search';
import ProductDetail from '../components/containers/productDetail/ProductDetail';
import Cart from '../components/containers/cart/Cart.js';
import FormLogging from '../components/containers/formLogging/FormLogging';
import FormSignup from '../components/containers/formSignup/FormSignup';
import FomrCategories from '../components/containers/formCategories/FormCategories';
import HomeDashboard from '../components/containers/adminDashboard/homeDashboard/HomeDashboard';
import ShippingAddress from '../components/containers/shippingAddress/shippingAddress';
import ConfirmOrder from '../components/containers/confirmOrder/confirmOrder';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Favourites from '../components/containers/favourites/Favourites';
import FormCategorie from '../components/containers/formCategories/FormCategories';
import FormProductDashboard from '../components/containers/adminDashboard/addProductDashboard/index.js';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const {REACT_APP_STRIPE_PUBLIC_KEY} = process.env;
const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
	const user = useSelector((state) => state.user);
	const userId = window.localStorage.getItem('userId');

	return (
		<div className='App'>
			{stripePromise && (
				<Elements stripe={stripePromise}>
					<React.Fragment>
						<GridLayout>
							{/* <GlobalStyles /> */}
							<ReactNotification />

							<Route path='/'>
								{user.role ? (
									user.role === 'admin' ? (
										<Redirect to='/adminDashboard' component={HomeDashboard} />
									) : (
										<Redirect to='/home' component={Home} />
									)
								) : !userId ? (
									<Redirect to='/home' component={Home} />
								) : null}
							</Route>

							<Route exact path='/admindashboard' component={HomeDashboard} />

							<Route
								render={({location}) =>
									[
										'/',
										'/home',
										'/signup',
										'/login',
										'/catalogue',
										'/cart',
										'/favorites',
										'/shipping',
										'/confirmation',
										'/about',
										'/contact',
									].includes(location.pathname) ? (
										<NavBar />
									) : null
								}
							/>
							<Route path='/products' component={NavBar} />

							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={FormLogging} />
							<Route exact path='/signup' component={FormSignup} />
							<Route exact path='/create' component={FormProductDashboard} />
							<Route exact path='/categorie' component={FormCategorie} />
							<Route exact path='/catalogue' component={Catalogue} />
							<Route exact path='/cart' component={Cart} />
							<Route exact path='/favorites' component={Favourites} />
							<Route
								exact
								path='/products/name/:name'
								render={({match}) => <Search name={match.params.name} />}
							/>
							<Route
								exact
								path='/products/id/:id'
								render={({match}) => <ProductDetail id={match.params.id} />}
							/>
							<Route path='/shipping' component={ShippingAddress}></Route>
							<Route path='/confirmation' component={ConfirmOrder}></Route>
							{/* 			</> */}
						</GridLayout>
					</React.Fragment>
				</Elements>
			)}
		</div>
	);
}

export default App;
