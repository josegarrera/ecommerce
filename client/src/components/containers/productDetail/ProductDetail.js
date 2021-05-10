import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetail} from '../../../redux/actions/index';
import ProductDetailStyle from './styled';

const ProductDetail = (id) => {
	const dispatch = useDispatch();
	const [imageBig, setImageBig] = useState();

	const product = useSelector((store) => store.productDetail);
	console.log('este es el product perro', product);

	useEffect(() => {
		dispatch(getProductDetail(id));
	}, [id]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<ProductDetailStyle>
			<div className='topDiv'>
				<Link to={`/catalogue`}>
					<div>Back</div>
				</Link>
				<div></div>
				<div>
					<a
						href={`whatsapp://send?text=http://localhost:3000/products/id/${product._id}`}
						data-action='share/whatsapp/share'
					>
						Share
					</a>
				</div>
			</div>
			<div className='centerDiv'>
				<div className='imagesBox'>
					{product.imageUrl &&
						product.imageUrl.map((image) => (
							<div onClick={() => setImageBig(image)}>
								<img
									className='imageMin'
									src={image}
									alt='imagen de producto'
								/>
							</div>
						))}
				</div>
				<div className='imageBig'>
					{imageBig ? (
						<img src={imageBig} alt='imagen de producto' />
					) : (
						<img
							src={product.imageUrl && product.imageUrl[0]}
							alt='imagen de producto'
						/>
					)}
				</div>
				<div className='infoDiv'>
					{/* <div>{product.name && product.name}</div>

					<div>{product.price.currency && product.price.currency}</div>
					<div>{product.price.value && product.price.value}</div> */}

					{/* <div>
						{'18 x '}
						{product.price.currency && product.price.currency}
						{Math.round(product.price.value && product.price.value / 18)}{' '}
						{'sin interés'}
					</div> */}
				</div>
			</div>
		</ProductDetailStyle>
	);
};

export default ProductDetail;
