import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	getAllProducts,
	getProducts,
	postLocalStorage,
	getWishListOfDB,
} from '../../../redux/actions';
import Footer from '../footer/Footer';
import ProductList from '../productsList/ProductList';
import HomeStyle from './styled';
import Carousel from '../carousel';
import MultiItemCarousel from '../multiItemCarousel/multiItemCarousel';

const Home = () => {
	const {products} = useSelector((state) => state.products);
	const cartProduct = useSelector((state) => state.cartProducts);

	useEffect(() => {
		const user = window.localStorage.getItem('userId');
		if (user) {
			dispatch(postLocalStorage({products: cartProduct, userId: user}));
			window.localStorage.setItem('cart', JSON.stringify([]));
			dispatch(getWishListOfDB(user));
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
		dispatch(getAllProducts());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<HomeStyle>
			<Carousel />

			<div className='product__row'>
				<br></br>
				<h3 className='top__text'>NEW RELEASES</h3>
				<span>see more</span>
			</div>

			<MultiItemCarousel items={products} />

			<div className='product__row'>
				<br></br>
				<h3 className='top__text'>ON SALE</h3>
				<span>see more</span>
			</div>

			<MultiItemCarousel items={products} />

			{/* <div className="offers">
        <ProductList products={limit4} />
      </div>

      <div className="offers">
        <ProductList products={limit4} />
      </div>
      <div className="offers">
        <ProductList products={limit4} />
      </div> */}
			<Footer></Footer>
		</HomeStyle>
	);
};

export default Home;
