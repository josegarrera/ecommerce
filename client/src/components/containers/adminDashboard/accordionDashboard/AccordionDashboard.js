import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import {TiDeleteOutline} from 'react-icons/ti';

import {
	MdDelete,
	MdCancel,
	MdEdit,
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from 'react-icons/md';

const AccordionDashboard = ({
	setAccStatus,
	products,
	EditAItem,
	AccStatus,
	isEditAItem,
	handleDeleteProductsOnEdit,
}) => {
	return (
		<div>
			<Accordion allowZeroExpanded>
				{
					<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
						<AccordionItemButton className='title2'>
							{products && EditAItem.products && EditAItem.products.length}{' '}
							Products
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
							{products &&
								EditAItem.products &&
								EditAItem.products.map((el) =>
									isEditAItem ? (
										<AccordionItemPanel>
											<div className='div_delete_categorie'>
												{el.name}
												<button className='buttonDiv'>
													<TiDeleteOutline
														id={el.name}
														onClick={handleDeleteProductsOnEdit}
														className='button'
													/>
												</button>
											</div>
										</AccordionItemPanel>
									) : (
										<AccordionItemPanel>{el.name}</AccordionItemPanel>
									)
								)}
						</div>
					</AccordionItem>
				}
			</Accordion>
		</div>
	);
};

export default AccordionDashboard;
