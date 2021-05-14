import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../../redux/actions/index';
import {IoLogoWhatsapp, IoReturnDownBack} from 'react-icons/io5';
import {BsLightning} from 'react-icons/bs';
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import ProductDetailStyle from './styled';

const ProductDetail = (id) => {
	const dispatch = useDispatch();
	const [imageBig, setImageBig] = useState();

	const product = useSelector((store) => store.productDetail);

	useEffect(() => {
		dispatch(getProductDetail(id));
	}, [id]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<ProductDetailStyle>
			<div className='all'>
				<div className='topDiv'>
					<div className='topDivLeft'>
						<Link to={`/catalogue`}>{'Back |'} </Link>
						<div className='categories'>
							{product.categories &&
								product.categories.map((categ) => (
									<div>
										{' > '}
										{categ.name}{' '}
									</div>
								))}
						</div>
					</div>

					<a
						href={`whatsapp://send?text=http://localhost:3000/products/id/${product._id}`}
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
							<img
								className='imageBig'
								src={product.imageUrl && product.imageUrl[0]}
								alt='imagen de producto'
							/>
						)}
					</div>
					<div className='infoDiv'>
						<div className='infoDivTop'>
							<div className='title'>
								<div className='name'>{product.name && product.name}</div>
								<div>
									<AiOutlineHeart className='fav' />
									{/* 	<FaShoppingCart className='cart' /> */}
								</div>
							</div>

							<div className='brand'>
								{'| '}
								{product.brands && product.brands.name}
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
								{'ACA FALTA EL STOCK '}
								{/* {product.variants && product.variants.stock}  */}
								{'unids.'}
							</div>
						</div>
						<button className='button'> Buy now</button>
					</div>
				</div>
			</div>
		</ProductDetailStyle>
	);
};

export default ProductDetail;
