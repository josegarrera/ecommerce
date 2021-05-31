import React, {useState} from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import {TiDeleteOutline} from 'react-icons/ti';

import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

const AccordionDashboard = ({
	items,
	isEditAItem,
	handler,
	Option,
	EditAItem,
	handleInput,
	paymentDetail,
	paymentMethod,
	paymentCurrency,
}) => {
	const [AccStatus, setAccStatus] = useState(false);

	if (isEditAItem && Option === 'variants') {
		items = items.map((el, index) => (
			<div key={index + '-variants'}>
				{Object.entries(el).map(
					(e, i) =>
						e[0] !== 'id' && (
							<div key={i + '-variantss'}>
								<label key={i + '-label'}>{e[0]}</label>
								<input
									key={i + '-input'}
									name={e[0]}
									id={e[0] + index}
									onChange={handleInput}
									value={EditAItem[index][e[0]]} // [{}{}]
								></input>
							</div>
						)
				)}
				<br />
			</div>
		));
	} else if (!isEditAItem && Option === 'variants') {
		items = items.map((el, index) => (
			<div key={index + '-variants'}>
				{Object.entries(el).map(
					(e, i) =>
						e[0] !== 'id' && (
							<div key={i + '-variantss'}>
								{e[0]}:&nbsp;
								{EditAItem[index][e[0]]}
							</div>
						)
				)}
				<br />
			</div>
		));
	}

	return (
		<div>
			<Accordion allowZeroExpanded>
				{Option ? (
					<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
						<AccordionItemButton className='title2'>
							{items && items.length} {Option} {''}
							{AccStatus === false ? (
								<MdKeyboardArrowDown
									className='open'
									onClick={() => setAccStatus(!AccStatus)}
								/>
							) : (
								<MdKeyboardArrowUp
									className='open'
									onClick={() => setAccStatus(!AccStatus)}
								/>
							)}
						</AccordionItemButton>
						<div className='accordionItems'>
							{items &&
								items.map((el) =>
									isEditAItem ? (
										<AccordionItemPanel>
											<div className='div_delete_categorie'>
												{Option === 'variants' ? el : el.name}
												<button className='buttonDiv'>
													<TiDeleteOutline
														id={el.name}
														onClick={handler}
														className='button'
													/>
												</button>
											</div>
										</AccordionItemPanel>
									) : (
										<AccordionItemPanel>
											{Option === 'variants' ? el : el.name}
										</AccordionItemPanel>
									)
								)}
						</div>
					</AccordionItem>
				) : null}

				{paymentDetail ? (
					<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
						<AccordionItemButton className='title2'>
							{'Payment Detail'}
							{AccStatus === false ? (
								<MdKeyboardArrowDown
									className='open'
									onClick={() => setAccStatus(!AccStatus)}
								/>
							) : (
								<MdKeyboardArrowUp
									className='open'
									onClick={() => setAccStatus(!AccStatus)}
								/>
							)}
						</AccordionItemButton>
						<div className='accordionItems'>
							<AccordionItemPanel>
								{paymentDetail ? (
									<>
										<div className='div_delete_categorie'>
											<div className='title'>Pay with: &nbsp;</div>
											<div>
												{paymentMethod.charAt(0).toUpperCase() +
													paymentMethod.slice(1)}
												{'.'}
											</div>
										</div>
										{/* <div className='div_delete_categorie'>
											<div className='title'>Transaction status: &nbsp;</div>
											<div>
												{paymentDetail.transactionStatus
													.charAt(0)
													.toUpperCase() +
													paymentDetail.transactionStatus.slice(1)}
												{'.'}
											</div>
										</div> */}
										<div className='div_delete_categorie'>
											<div className='title'>Payment status: &nbsp;</div>
											<div>
												{paymentDetail.paymentStatus.charAt(0).toUpperCase() +
													paymentDetail.paymentStatus.slice(1)}
												{'.'}
											</div>
										</div>
										<div className='div_delete_categorie'>
											<div className='title'>Payment date: &nbsp;</div>
											<div>{paymentDetail.datePayment}</div>
										</div>
										<div className='div_delete_categorie'>
											<div className='title'>Payment ID: &nbsp;</div>
											<div>{paymentDetail.paymentId}</div>
										</div>
										<div className='div_delete_categorie'>
											<div className='title'>Total amount: &nbsp;</div>
											<div>
												{paymentCurrency} {paymentDetail.total_amount}
											</div>
										</div>
										<div className='div_delete_categorie'>
											<div className='title'>Net Income: &nbsp;</div>
											<div>
												{paymentCurrency} {paymentDetail.net_income}
											</div>
										</div>
									</>
								) : null}
							</AccordionItemPanel>
						</div>
					</AccordionItem>
				) : null}
			</Accordion>
		</div>
	);
};

export default AccordionDashboard;
