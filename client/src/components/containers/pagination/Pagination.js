import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DivPag from './styled';
import {getProductsQuery} from '../../../redux/actions/index.js';

const Pagination = ({pages, actualizar}) => {
	const dispatch = useDispatch();

	function actualizar(page) {
		console.log('estoy aca', page);
		dispatch(getProductsQuery(page));
	}

	return (
		<DivPag>
			{pages &&
				pages.map((page) => (
					<button className={page} onClick={() => actualizar(page)}></button>
				))}
		</DivPag>
	);
};

export default Pagination;
