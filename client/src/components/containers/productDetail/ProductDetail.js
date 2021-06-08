import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
	getProductDetail,
	addCartProduct,
	cleanProductDetail,
	addFavProduct,
	removeFavProduct,
	addFavProductToDB,
	removeFavProductToDB,
	postLocalStorage,
	getAllProducts,
} from '../../../redux/actions/index';
import {IoLogoWhatsapp, IoReturnDownBack} from 'react-icons/io5';
import {BsLightning} from 'react-icons/bs';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import ProductDetailStyle from './styled';
import {Link} from 'react-router-dom';
import {store} from 'react-notifications-component';
import DetailLoader from '../../../utils/detailLoader';
import Reviews from '../reviews';
import CardProduct from '../../presentationals/cardProduct/CardProduct';
import {URLS} from '../../../utils/constants';

const ProductDetail = ({id, location}) => {
	const dispatch = useDispatch();
	const [imageBig, setImageBig] = useState();
	const [userOrder, setUserOrder] = useState([]);

	let history = useHistory();
	let product = useSelector((store) => store.productDetail);
	const wishlist = useSelector((store) => store.wishlist);
	const fav = wishlist.find(({product: {_id}}) => _id === product._id);
	const userId = window.localStorage.getItem('userId');
	const [updateReview, setUpdateReview] = useState(false);
	const [variants, setVariants] = useState({lot: 1, variant: 0});

	const handleSelectVar = (e) => {
		if (e.target.name === 'variant') {
			setVariants({
				...variants,
				lot: 1,
				variant: Number(e.target.value),
			});
		} else {
			setVariants({
				...variants,
				[e.target.name]: Number(e.target.value),
			});
		}
	};

	useEffect(() => {
		dispatch(getProductDetail(id));
	}, [updateReview]); // eslint-disable-line react-hooks/exhaustive-deps
	useEffect(() => {
		dispatch(getAllProducts());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		checkUserBuy();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		return dispatch(cleanProductDetail());
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const checkUserBuy = async () => {
		let res = await axios.get(`${URLS.URL_USER_ORDERS}/user?userId=${userId}`);
		setUserOrder(res.data.response);
	};

	const handleAddCart = () => {
		//add to cart
		dispatch(
			addCartProduct({
				id: product._id,
				lot: variants.lot,
				variant: variants.variant,
			})
		);
		if (userId) {
			dispatch(
				postLocalStorage({
					products: {
						id: product._id,
						lot: variants.lot,
						variant: variants.variant,
					},
					userId,
				})
			);
			window.localStorage.setItem('cart', JSON.stringify([]));
		}
	};

	const handleAddFav = () => {
		//add to fav
		dispatch(addFavProduct(id));
		dispatch(addFavProductToDB({userId, productId: id}));

		//addToFav action=>reducer=>localStorage
	};

	const handleRemoveFav = () => {
		//add to fav
		dispatch(removeFavProduct(id));
		dispatch(removeFavProductToDB({userId, productId: id}));
	};

	return (
		<ProductDetailStyle>
			{product.name ? (
				<div className='all'>
					<div className='topDiv'>
						<div className='topDivLeft'>
							<button
								className='back'
								type='button'
								onClick={() => history.goBack()}
							>
								{'Back |'} &nbsp;
							</button>
							<div className='categories'>
								{product.categories &&
									product.categories.map((categ, i) => (
										<div key={i}>{categ.name} &nbsp;</div>
									))}
							</div>
						</div>

						<a
							href={`whatsapp://send?text=https://client-ecommerce-ebon.vercel.app/products/id/${product._id}`}
							data-action='share/whatsapp/share'
						>
							<IoLogoWhatsapp />
						</a>
					</div>
					<div className='centerDiv'>
						<div className='imagesBox'>
							{product.imageUrl &&
								product.imageUrl.map((image, i) => (
									<div
										key={i}
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
								{product.combo.length > 0 ? (
									<div className='comboDiv'>Combo</div>
								) : null}
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
								<div className='description'>
									{product.description && product.description}
								</div>
								{product.variants && product.variants.length > 1 ? (
									<div className='stockDiv'>
										{'Colors: '}
										<div className='variants'>
											{product.variants
												? product.variants.map((variant, i) => (
														<div key={`${i}`} className='variant'>
															<input
																key={`${i}`}
																type='radio'
																name='variant'
																value={i}
																id={`${i}`}
																onChange={handleSelectVar}
															/>
															&nbsp;
															<label htmlFor={`${variant.color}`}>{`${
																variant.color &&
																variant.color.charAt(0).toUpperCase() +
																	variant.color.slice(1)
															}`}</label>
														</div>
												  ))
												: null}
										</div>
									</div>
								) : null}

								<div className='quantity'>
									<p>Quantity: &nbsp;</p>
									<button
										onClick={(e) => handleSelectVar(e)}
										value={variants.lot > 1 ? variants.lot - 1 : variants.lot}
										name='lot'
									>
										- &nbsp;
									</button>
									<span> {variants.lot} </span>
									<button
										onClick={(e) => handleSelectVar(e)}
										value={
											variants.lot < product.variants[variants.variant].stock
												? variants.lot + 1
												: variants.lot
										}
										name='lot'
									>
										&nbsp; +
									</button>
								</div>
							</div>
							<Link to='/cart' className='buttonLink' onClick={handleAddCart}>
								<div>Buy now</div>
							</Link>
						</div>
					</div>
				</div>
			) : (
				<DetailLoader className='detailLoader' />
			)}
			{product.combo && product.combo.length > 0 ? (
				<div className='comboProducts'>
					<div className='title_cnt'>
						<h5>Products in this combo</h5>
					</div>
					<div className='productList'>
						{product &&
							product.combo.map((product) => (
								<CardProduct
									key={product._id}
									name={product.name}
									price={product.price}
									imageUrl={product.imageUrl}
									_id={product._id}
									combo={product.combo}
									loading={false}
									location={location}
								/>
							))}
					</div>
				</div>
			) : null}
			<div className='div_comments'>
				{product._id && (
					<Reviews
						id={product._id}
						setUpdateReview={setUpdateReview}
						updateReview={updateReview}
						allReviews={product.reviews}
						userOrder={userOrder}
					/>
				)}
			</div>
		</ProductDetailStyle>
	);
};

export default ProductDetail;
