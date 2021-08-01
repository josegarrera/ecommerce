import React from 'react';
import {useDispatch} from 'react-redux';
import DivPag from './styled';
import {getProductsQuery} from '../../../redux/actions/index.js';

const Pagination = ({pages}) => {
	const dispatch = useDispatch();
	const [actual, setActual] = React.useState(0);
	function actualizar(page, i) {
		dispatch(getProductsQuery(page));
		setActual(i);
	}
	return (
		<DivPag>
			{pages &&
				pages.map((page, i) => {
					if (i === actual) {
						return (
							<button
								style={{background: '#ee362e'}}
								key={i}
								className={page}
								onClick={() => actualizar(page, i)}
							>
								{i + 1}
							</button>
						);
					} else
						return (
							<button
								key={i}
								className={page}
								onClick={() => actualizar(page, i)}
							>
								{i + 1}
							</button>
						);
				})}
		</DivPag>
	);
};

export default Pagination;
