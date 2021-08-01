import React from 'react';
import CardItems from '../cardItemsUser/CardItemsUser';
import ListStyles from './styled';
import InfiniteScroll from 'react-infinite-scroll-component';

const ListDashboard = ({Options, array}) => {

	return (
		<ListStyles>
			{Options === 'Orders' ? (
				<InfiniteScroll
					className='listProduct'
					dataLength={array.length}
					loader={<h4>Loading...</h4>}
					height={600}
				>
					{array &&
						array.map(
							(el, index) =>
								el.state !== 'created' && (
									<CardItems el={el} index={index} options={Options} />
								)
						)}
				</InfiniteScroll>
			) : null}
		</ListStyles>
	);
};

export default ListDashboard;
