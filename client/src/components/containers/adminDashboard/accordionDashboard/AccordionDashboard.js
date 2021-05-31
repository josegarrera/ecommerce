import React, {useState} from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import {TiDeleteOutline} from 'react-icons/ti';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
	setEditAItem,
}) => {
	const [AccStatus, setAccStatus] = useState(false);

	if (isEditAItem && Option === 'variants') {
		items = items.map((el, index) => (
			<div key={index + '-variants'} id='variantsAccordionContainer'>
				{Object.entries(el).map(
					(e, i) =>
						e[0] !== 'id' && (
							<div key={i + '-variantss'}>
								{e[0] === 'imageUrl' ? (
									<div id='imagesVariantsContainer'>
										<div>
											<label
												for={index + 'file-upload-variants'}
												key={index + 'label-variants'}
												className='labelVariantsFile'
											>
												<input
													id={index + 'file-upload-variants'}
													key={index + 'input-file-variants'}
													className='inputFileVariants'
													name='imageFile'
													type='file'
													accept='image/*'
													onChange={(e) =>
														handleInput(e, EditAItem, setEditAItem)
													}
													value={
														EditAItem[index].imageFile &&
														EditAItem[index].imageFile.fileValue
													}
												/>{' '}
												Add img
											</label>
											{EditAItem[index].imageFile && (
												<label key={i + '-label-imageFile'}>
													{EditAItem[index].imageFile.fileValue
														? '1 file selected'
														: ''}
												</label>
											)}
										</div>
										<Carousel className='imageSlider' showStatus>
											{e[1].map((url, i) => (
												<div key={url + 'div'} className='variantSliderDiv'>
													<img
														key={url + '-img'}
														className='variantImg'
														src={url}
														alt='imagen de producto'
													/>
													<button className='buttonDiv'>
														<TiDeleteOutline
															key={url + 'btnDelete'}
															id={String(index + url)}
															onClick={(e) =>
																handleInput(e, EditAItem, setEditAItem)
															}
															className='button'
														/>
													</button>
												</div>
											))}
										</Carousel>
									</div>
								) : (
									e[0] !== 'imageFile' && (
										<div>
											<label key={i + '-label' + e[0]}>{e[0]}</label>
											<input
												key={i + '-input' + e[0]}
												name={e[0]}
												className='variantInput'
												type={e[0] === 'stock' ? 'number' : 'text'}
												id={e[0] + index}
												onChange={(e) =>
													handleInput(e, EditAItem, setEditAItem)
												}
												value={EditAItem[index][e[0]]}
											></input>
										</div>
									)
								)}
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
								items.map((el, index) =>
									isEditAItem ? (
										<AccordionItemPanel>
											<div className='div_delete_categorie'>
												{Option === 'variants' ? el : el.name}
												<button className='buttonDiv'>
													<TiDeleteOutline
														id={el.name || String(EditAItem[index].id)}
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
