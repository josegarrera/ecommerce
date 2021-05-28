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
}) => {
	const [AccStatus, setAccStatus] = useState(false);



	if (Option === 'variants') {
		items = items.map((el, index) => (
			<div key={index + '-variants'}>
				{Object.entries(el).map((e, i) => (
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
				))}
				<br />
			</div>
		));
	}

	console.log(EditAItem && EditAItem);

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
