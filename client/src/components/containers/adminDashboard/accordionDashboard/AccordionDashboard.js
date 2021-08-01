import React, {useState} from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import {TiDeleteOutline} from 'react-icons/ti';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import {FcAddImage, FcRemoveImage} from 'react-icons/fc';
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
			<div
				key={index + '-variants'}
				id='variantsAccordionContainer'
				className='productAllInfo'
			>
				{Object.entries(el).map(
					(e, i) =>
						e[0] !== 'id' && (
							<div key={i + '-variants-1'}>
								{e[0] === 'imageUrl' ? (
									<div key={i + '-variants-2'} id='imagesVariantsContainer'>
										<div key={i + '-variants-3'}>
											<label
												htmlFor={index + 'file-upload-variants'}
												key={index + 'label-variants'}
												className='labelVariantsFile'
											>
												<input
													id={index + 'file-upload-variants'}
													key={index + 'input-file-variants'}
													className='inputFileVariants'
													name='imageFile'
													type='file'
													multiple
													accept='image/*'
													onChange={(e) =>
														handleInput(e, EditAItem, setEditAItem)
													}
													value={
														EditAItem[index].imageFile &&
														EditAItem[index].imageFile.fileValue
													}
												/>{' '}
												<FcAddImage />
											</label>
											{EditAItem[index].imageFile && (
												<label key={i + '-label-imageFile'}>
													{EditAItem[index].imageFile.filesData.length +
														' files'}
												</label>
											)}
										</div>
										<Carousel
											className='imageSlider'
											showStatus
											showThumbs={false}
										>
											{e[1].map((url, i) => (
												<div key={url + 'div'} className='variantSliderDiv'>
													<img
														key={url + '-img'}
														className='variantImg'
														src={url}
														alt='imagen de producto'
													/>
													<label
														key={i + '-btn-variants'}
														name={String(index + url)}
														className='labelImgVariants'
													>
														<input
															type='button'
															key={i + '-btn-variants'}
															name={String(index + url)}
															className='inputFileVariants labelImgVariants'
															onClick={(e) =>
																handleInput(e, EditAItem, setEditAItem)
															}
														/>
														<FcRemoveImage
															key={url + 'btnDelete'}
															name={String(index + url)}
															className='button'
														/>
													</label>
												</div>
											))}
										</Carousel>
									</div>
								) : (
									e[0] !== 'imageFile' && (
										<div key={i + '-variants-4'}>
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
			<div key={index + '-variants-5'}>
				{Object.entries(el).map(
					(e, i) =>
						e[0] !== 'id' &&
						e[0] !== 'imageFile' && (
							<div key={i + '-variantss'}>
								<b>{e[0]}:&nbsp;</b>
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
				{Option && Option !== 'specs' ? (
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
										<AccordionItemPanel key={index + '-accordion-panel'}>
											<div
												key={index + '-accordion-div'}
												className='div_delete_categorie'
											>
												{Option === 'variants' ? el : el.name}
												<label
													htmlFor={el.name || String(EditAItem[index].id)}
													key={index + '-accordion-label-delete'}
													className='labelVariantsFile buttonDiv'
												>
													<input
														type='button'
														className='inputFileVariants'
														key={index + '-accordion-input-delete'}
														id={el.name || String(EditAItem[index].id)}
														onClick={handler}
													/>
													<TiDeleteOutline
														key={index + '-accordion-ti'}
														id={el.name || String(EditAItem[index].id)}
														className='button'
													/>
												</label>
											</div>
										</AccordionItemPanel>
									) : (
										<AccordionItemPanel key={index + '-accordion-panel2'}>
											{Option === 'variants' ? el : el.name}
										</AccordionItemPanel>
									)
								)}
						</div>
					</AccordionItem>
				) : null}
				{Option === 'specs' && items.length ? (
					<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
						<AccordionItemButton className='title2'>
							{'Specs'}
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
								{isEditAItem
									? items.map((entrie, i) => (
											<div key={i + 'specs-div'}>
												<label key={i + 'specs-lbl'}>{entrie[0]}</label>
												<input
													key={i + 'specs-input'}
													type='text'
													name='specs'
													id={entrie[0]}
													value={EditAItem && EditAItem[entrie[0]]}
													onChange={handleInput}
												/>
											</div>
									  ))
									: items.map((entrie, i) => (
											<div key={i + 'specs-div'}>
												<label key={i + 'specs-lbl'}>
													<b>{entrie[0]}:</b>{' '}
												</label>
												<label key={i + 'specs-input'}>
													{EditAItem && EditAItem[entrie[0]]}
												</label>
											</div>
									  ))}
							</AccordionItemPanel>
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
