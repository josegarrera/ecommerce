import React, {useState} from 'react';
import {StyledContainer} from './styled'
import DataListInput from 'react-datalist-input';

const newMatch = (currentInput, item) =>
	item.label && item.label.toLowerCase().includes(currentInput.toLowerCase());

const DataList = ({items,handleDataList,placeholder}) => {
	const [Items, setItems] = useState([{key: 0, label: ''}]);


	const handleSearch = (e) => {
		let productsFilter =
			items &&
			items.filter((el) =>
				el.name.toLowerCase().includes(e.toLowerCase())
			);
		return itemsToOptions(productsFilter);
	};

	const itemsToOptions = (array) => {
		setItems(
			array &&
				array.map((el) => {
					return {
						key: el._id,
						label: el.name,
					};
				})
		);
	};

	return (
		<StyledContainer>
			<DataListInput
				inputClassName='input'
				placeholder={placeholder}
				requiredInputLength={1}
				items={Items}
				match={newMatch}
				onInput={handleSearch}
				dropdownClassName='data_input'
				activeItemClassName='data_active'
				dropDownLength={3}
				itemClassName='data_item'
				clearInputOnClick={true}
				onSelect={(e) => handleDataList(e)}
			/>
		</StyledContainer>
	);
};


export default DataList