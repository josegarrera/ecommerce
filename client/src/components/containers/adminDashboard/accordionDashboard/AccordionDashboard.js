import React, {useState} from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import {TiDeleteOutline} from 'react-icons/ti';

import {
	MdKeyboardArrowDown,
	MdKeyboardArrowUp,
} from 'react-icons/md';

const AccordionDashboard = ({
	items,
	isEditAItem,
	handler,
	Option,
}) => {
	const [AccStatus, setAccStatus] = useState(false);

	return (
		<div>
			<Accordion allowZeroExpanded>
				{
					<AccordionItem onClick={() => setAccStatus(!AccStatus)}>
						<AccordionItemButton className='title2'>
							{items && items.length} {Option}
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
												{el.name}
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
