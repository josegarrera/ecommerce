import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import GridLayout from '../utils/GridLayout';
import NavBar from '../components/presentationals/navBar/NavBar.js';
import Footer from '../components/containers/footer/Footer';
import Home from '../components/containers/home/Home.js';
import Catalogue from '../components/containers/catalogue/Catalogue';
import Search from '../components/containers/search/Search';
import ProductDetail from '../components/containers/productDetail/ProductDetail';
import Cart from '../components/containers/cart/Cart.js';
import FormLogging from '../components/containers/formLogging/FormLogging';
import FormSignup from '../components/containers/formSignup/FormSignup';
import HomeDashboard from '../components/containers/adminDashboard/homeDashboard/HomeDashboard';
import ShippingAddress from '../components/containers/shippingAddress/shippingAddress';
import ConfirmOrder from '../components/containers/confirmOrder/confirmOrder';
import AboutUs from '../components/presentationals/aboutUs/AboutUs';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Favourites from '../components/containers/favourites/Favourites';
import UserDashboard from '../components/containers/userDashboard/homeUserDashboard/HomeUserDashboard';
import FormCategorie from '../components/containers/formCategories/FormCategories';
import FormProductDashboard from '../components/containers/adminDashboard/addProductDashboard/index.js';
import Reset from '../components/containers/reset/Reset';
import Contact from '../components/containers/contact/index';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import GlobalStyles from '../utils/GlobalStyles';

/* Seteando el header del axios para todas las rutas*/
import axios from 'axios';

const {REACT_APP_STRIPE_PUBLIC_KEY} = process.env;
const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
	const user = useSelector((state) => state.user);
	const userId = window.localStorage.getItem('userId');
	const token = window.localStorage.getItem('token');
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	return (
		<div className='App'>
			{stripePromise && (
				<Elements stripe={stripePromise}>
					<React.Fragment>
						<GridLayout>
							{/* 	<GlobalStyles /> */}
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
										'/forgot',
										'/catalogue',
										'/cart',
										'/favorites',
										'/shipping',
										'/confirmation',
										'/about',
										'/contact',
										'/resetPassword',
										'/userDashboard',
									].includes(location.pathname) ? (
										<NavBar />
									) : null
								}
							/>
							<Route path='/products' component={NavBar} />
							<Route exact path='/' component={Home} />
							<Route exact path='/home' component={Home} />
							<Route exact path='/login' component={FormLogging} />
							<Route exact path='/signup' component={FormSignup} />
							<Route exact path='/create' component={FormProductDashboard} />
							<Route exact path='/categorie' component={FormCategorie} />
							<Route exact path='/catalogue' component={Catalogue} />
							<Route exact path='/about' component={AboutUs} />
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
								render={({match, location}) => (
									<ProductDetail id={match.params.id} location={location} />
								)}
							/>
							<Route path='/shipping' component={ShippingAddress}></Route>
							<Route path='/confirmation' component={ConfirmOrder}></Route>
							<Route path='/resetPassword' component={Reset} />
							<Route path='/contact' component={Contact} />
							<Route path='/userDashboard' component={UserDashboard} />
							<Route
								render={({location}) =>
									[
										'/',
										'/home',
										'/catalogue',
										'/cart',
										'/favorites',
										'/shipping',
										'/confirmation',
										'/about',
										'/contact',
									].includes(location.pathname) ? (
										<Footer />
									) : null
								}
							/>
						</GridLayout>
					</React.Fragment>
				</Elements>
			)}
		</div>
	);
}

export default App;
