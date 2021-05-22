import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
	getProductDetail,
	addCartProduct,
	cleanProductDetail,
	addFavProduct,
	removeFavProduct,
} from '../../../redux/actions/index';
import {IoLogoWhatsapp, IoReturnDownBack} from 'react-icons/io5';
import {BsLightning} from 'react-icons/bs';
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import ProductDetailStyle from './styled';
import {Link} from 'react-router-dom';
import {store} from 'react-notifications-component';

const ProductDetail = (id) => {
	const dispatch = useDispatch();
	const [imageBig, setImageBig] = useState();
	let history = useHistory();

	const product = useSelector((store) => store.productDetail);
	const wishlist = useSelector((store) => store.wishlist);
	console.log(`wishlist`, wishlist);
	const fav = wishlist.find(({product: {_id}}) => _id === product._id);
	const userId = window.localStorage.getItem('userId');

	useEffect(() => {
		dispatch(getProductDetail(id));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	useEffect(() => {
		return dispatch(cleanProductDetail());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleAddCart = () => {
		//add to cart
		dispatch(addCartProduct(product._id));
	};

	const handleAddFav = () => {
		//add to fav
		dispatch(addFavProduct(product._id));
		//addToFav action=>reducer=>localStorage
	};

	const handleRemoveFav = () => {
		//add to fav
		dispatch(removeFavProduct(product._id));
	};

	if (product.name) {
		return (
			<ProductDetailStyle>
				<div className='all'>
					<div className='topDiv'>
						<div className='topDivLeft'>
							<button
								className='back'
								type='button'
								onClick={() => history.goBack()}
							>
								{'Back |'}
							</button>
							<div className='categories'>
								{product.categories &&
									product.categories.map((categ, i) => (
										<div key={i}>
											{' > '}
											{categ.name}{' '}
										</div>
									))}
							</div>
						</div>

						<a
							href={`whatsapp://send?text=https://storeft11g01.herokuapp.com/products/id/${product._id}`}
							data-action='share/whatsapp/share'
						>
							<IoLogoWhatsapp />
						</a>
					</div>
					<div className='centerDiv'>
						<div className='imagesBox'>
							{product.imageUrl &&
								product.imageUrl.map((image) => (
									<div
										className='imageBox'
										onMouseOver={() => setImageBig(image)}
									>
										<img
											className='imageMin'
											src={image}
											alt='imagen de producto'
										/>
									</div>
								))}
						</div>
						<div className='imageBigDiv'>
							{imageBig ? (
								<img
									className='imageBig'
									src={imageBig}
									alt='imagen de producto'
								/>
							) : (
								product.imageUrl && (
									<img
										className='imageBig'
										src={product.imageUrl && product.imageUrl[0]}
										alt='imagen de producto'
									/>
								)
							)}
						</div>
						<div className='infoDiv'>
							<div className='infoDivTop'>
								<div className='title'>
									<div className='name'>{product.name && product.name}</div>
									<div className='btns'>
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
														animationIn: [
															'animate__animated',
															'animate__fadeIn',
														],
														animationOut: [
															'animate__animated',
															'animate__fadeOut',
														],
														dismiss: {
															duration: 3000,
															onScreen: true,
															pauseOnHover: true,
														},
													})
												}
											>
												<AiOutlineHeart className='fav' />
											</Link>
										) : fav ? (
											<AiFillHeart onClick={handleRemoveFav} className='fav' />
										) : (
											<AiOutlineHeart onClick={handleAddFav} className='fav' />
										)}
										<button className='btn__cart' onClick={handleAddCart}>
											<FaShoppingCart />
										</button>
									</div>
								</div>

								<div className='brand'>
									{'| '}
									{product.brands && product.brands.map((brand) => brand.name)}
								</div>

								<div className='price'>
									{product.price && product.price.currency}{' '}
									{product.price && product.price.value.toFixed(2)}
								</div>

								<div className='cuotas'>
									{'18 mths x '}
									{product.price && product.price.currency}{' '}
									{product.price &&
										Math.ceil(product.price.value / 18).toFixed(2)}{' '}
									{'interest-free.'}
								</div>
							</div>
							<div className='infoDivCenter'>
								<div className='misce'>
									<BsLightning className='shipping' />
									<div className='shipping'>Free shipping the next 3 days!</div>
								</div>
								<div className='misceBottom'>
									<div>
										<IoReturnDownBack className='shipping' />
									</div>
									<div>
										<div className='shipping'>Free return.</div>
										<div className='return'>
											You have 30 days since you receive it.
										</div>
									</div>
								</div>
							</div>

							<div className='infoDivBottom'>
								<div>{product.description && product.description}</div>

								<div>
									{'Variants: '}
									{'ACA FALTAN LAS VARIANTS'}
								</div>

								<div>
									{'Avaliable Stock:'}
									{product.variants && product.variants.stock}
									{'unids.'}
								</div>
							</div>
							<button className='button'> Buy now</button>
						</div>
					</div>
				</div>
			</ProductDetailStyle>
		);
	} else {
		return <div>loading...</div>;
	}
};

export default ProductDetail;
