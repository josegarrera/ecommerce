import React from 'react';
import {Route} from 'react-router-dom';
import GridLayout from '../utils/GridLayout';
//import {GlobalStyles} from './GlobalStyles';
import NavBar from '../components/presentationals/navBar/NavBar.js';
import Catalogue from '../components/containers/catalogue/Catalogue';
import FormProduct from '../components/containers/formProduct/FormProduct';
import Search from '../components/containers/search/Search';
import ProductDetail from '../components/containers/productDetail/ProductDetail';
import Cart from '../components/containers/cart/Cart.js';
import FormLogging from '../components/containers/formLogging/FormLogging';
import FormSignup from '../components/containers/formSignup/FormSignup';
import FomrCategories from '../components/containers/formCategories/FormCategories'

function App() {
	return (
		<div className='App'>
			<React.Fragment>
				<GridLayout>
					{/* <GlobalStyles /> */}
					<Route path='/' component={NavBar} />
					<Route exact path='/login' component={FormLogging} />
					<Route exact path='/signup' component={FormSignup} />
					<Route exact path='/catalogue' component={Catalogue} />
					<Route exact path='/create' component={FormProduct} />
					<Route exact path='/categorie' component={FomrCategories} />
					<Route exact path='/cart' component={Cart} />

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
				</GridLayout>
			</React.Fragment>
		</div>
	);
}

export default App;
