import React, {useState} from 'react';
import DivCrdProd, {StyledLoder} from './styled';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {
	addCartProduct,
	addFavProduct,
	removeFavProduct,
	postLocalStorage,
	addFavProductToDB,
	removeFavProductToDB,
} from '../../../redux/actions';
import cardLoder from '../../../utils/cardLoader';
import {store} from 'react-notifications-component';

const CardProduct = ({
	name,
	imageUrl,
	price,
	_id,
	loading,
	combo,
	location,
}) => {
	const wishlist = useSelector((state) => state.wishlist);
	const dispatch = useDispatch();
	const [Load, setLoad] = useState('loading');
	const userId = window.localStorage.getItem('userId');

	const handleAddCart = () => {
		//add to cart
		dispatch(addCartProduct({id: _id, lot: 1, variant: 0}));
		if (userId) {
			dispatch(
				postLocalStorage({products: {id: _id, lot: 1, variant: 0}, userId})
			);
			window.localStorage.setItem('cart', JSON.stringify([]));
		}
	};
	const fav = wishlist && wishlist.find(({product}) => product._id === _id);

	const handleAddFav = () => {
		//add to fav
		dispatch(addFavProduct(_id));
		dispatch(addFavProductToDB({userId, productId: _id}));
		//addToFav action=>reducer=>localStorage
	};

	const handleRemoveFav = () => {
		//add to fav
		dispatch(removeFavProduct(_id));
		dispatch(removeFavProductToDB({userId, productId: _id}));
	};

	const handleImageLoaded = () => {
		setLoad('loaded');
	};

	if (Load === 'loading' && loading === true) {
		return <StyledLoder>{cardLoder()}</StyledLoder>;
	} else {
		return (
			<DivCrdProd>
				<div className='cnt__image'>
					{location ? (
						<Link target='_blank' rel='noreferrer' to={`/products/id/${_id}`}>
							<img
								className='img__card'
								src={imageUrl[0]}
								alt='producto'
								onLoad={handleImageLoaded}
							/>
						</Link>
					) : (
						<Link to={`/products/id/${_id}`}>
							<img
								className='img__card'
								src={imageUrl[0]}
								alt='producto'
								onLoad={handleImageLoaded}
							/>
						</Link>
					)}
				</div>
				{combo && combo.length > 0 ? (
					<div className='comboDiv'>Combo</div>
				) : null}
				<div className='cnt_info'>
					<div className='row'>
						<Link target='_blank' rel='noreferrer' to={`/products/id/${_id}`}>
							<h5 className='product__name'>{name}</h5>
						</Link>
						<h6 className='product__price'>
							{price.currency} {price.value}
						</h6>
						{!userId ? (
							<Link
								to='/login'
								onClick={() =>
									store.addNotification({
										title: 'You are not Login',
										message: 'You have to be logged in to add Favs.',
										type: 'danger',
										insert: 'top',
										container: 'top-center',
										animationIn: ['animate__animated', 'animate__fadeIn'],
										animationOut: ['animate__animated', 'animate__fadeOut'],
										dismiss: {
											duration: 3000,
											onScreen: true,
											pauseOnHover: true,
										},
									})
								}
							>
								<button className='btn__fav'>
									<AiOutlineHeart />
								</button>
							</Link>
						) : !fav ? (
							<button className='btn__fav' onClick={handleAddFav}>
								<AiOutlineHeart />
							</button>
						) : (
							<button className='btn__fav' onClick={handleRemoveFav}>
								<AiFillHeart />
							</button>
						)}
					</div>

					<button className='btn__cart' onClick={handleAddCart}>
						<i>
							<FaShoppingCart />
						</i>
					</button>
				</div>
			</DivCrdProd>
		);
	}
};

export default CardProduct;
