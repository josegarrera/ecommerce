import React from 'react';
import ProductDashboardStyle from './styled';
import AccordionDashboard from '../../adminDashboard/accordionDashboard/AccordionDashboard';
import {Link} from 'react-router-dom';

//import AccordionDashboard from '../accordionDashboard/AccordionDashboard';

const CardItems = ({el}) => {
	return (
		<ProductDashboardStyle>
			{el && (
				<div>
					<div className='renglon'>
						<div className='title'>
							State:{' '}
							<span
								style={
									el.state === 'completed'
										? {color: 'green'}
										: el.state === 'canceled'
										? {color: 'red'}
										: {color: 'orange'}
								}
							>
								{el.state}
							</span>
						</div>
					</div>
					<div className='renglon'>
						<div className='title'>
							Products:
							<ul>
								<span>
									{console.log(el.items)}
									{el.items &&
										el.items.length &&
										el.items.map((el) => (
											<Link to={`/products/id/${el.product?._id}`}>
												<li>• {el.product?.name}</li>
											</Link>
										))}
								</span>
							</ul>
						</div>
					</div>
					{el.transactionDetail && <br />}
					<AccordionDashboard
						paymentDetail={el.transactionDetail}
						paymentMethod={el.paymentMethod}
						paymentCurrency={el.currency}
					/>
				</div>
			)}
		</ProductDashboardStyle>
	);
};

export default CardItems;
