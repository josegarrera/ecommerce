import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeFavProduct, removeFavProductToDB} from '../../../redux/actions';
import DivCardFav from './styled';

const FavCard = ({imageUrl, name, price: {value, currency}, _id}) => {
	const userId = window.localStorage.getItem('userId');
	const dispatch = useDispatch();
	const deleteFav = () => {
		dispatch(removeFavProduct(_id));
		dispatch(removeFavProductToDB({userId, productId: _id}));
	};

	return (
		<DivCardFav>
			<Link className='cincuenta' to={`/products/id/${_id}`}>
				<div className='imageDiv'>
					<img className='image' src={imageUrl[0]} alt="Favorite's" />
				</div>
			</Link>
			<div className='name__price'>
				<div className='name__fav'>{name}</div>
				<div className='price__fav'>{`${currency} ${value}`}</div>
			</div>
			<div className='btns__cnt'>
				<Link to={`/products/id/${_id}`}>
					<button className='btn btn__art'>See article</button>
				</Link>
				<button className='btn btn__del' onClick={deleteFav}>
					Delete of Fav's
				</button>
			</div>
		</DivCardFav>
	);
};

export default FavCard;
