import React, {useState, useEffect} from 'react';
import FormProductDashboard from '../addProductDashboard';
import SearchStyles from './styled';
import {FaSearch} from 'react-icons/fa';
import {IoMdAddCircle} from 'react-icons/io';
import DataListInput from 'react-datalist-input';
import {handleOnChangue, handleSelectDataList, handleClick} from './utils.js';

const SearchBar = ({
	Items,
	setFilter,
	setCreate,
	options,
	setOptions,
	showModal,
	setShowModal,
	allProducts,
}) => {
	const [dataListSearch, setDataListSearch] = useState([{key: '', label: ''}]);
	const newMatch = (currentInput, item) =>
		item.label && item.label.toLowerCase().includes(currentInput.toLowerCase());

	const [itemSelected, setItemSelected] = useState('');

	useEffect(() => {
		setItemSelected('');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [options]);

	return (
		<SearchStyles>
			<div className='search__bar'>
				<DataListInput
					inputClassName='searchInput'
					placeholder='   Search by name, price, id, categorie, role, email, etc'
					items={dataListSearch}
					match={newMatch}
					requiredInputLength={2}
					onInput={(e) =>
						handleOnChangue(
							e,
							options,
							Items,
							setItemSelected,
							setDataListSearch,
							setFilter
						)
					}
					onSelect={(e) =>
						handleSelectDataList(e, Items, setFilter, setItemSelected)
					}
					value={itemSelected}
				/>
				<i className='search__icon'>
					<FaSearch />
				</i>
			</div>
			{options && options !== 'Orders' ? (
				<button
					className='form__button'
					onClick={() =>
						handleClick(options, setOptions, setShowModal, setCreate)
					}
				>
					<div>
						<i className='add__icon'>
							<IoMdAddCircle />
						</i>
					</div>
					<div>
						Add {options && options.toLowerCase().slice(0, options.length - 1)}
					</div>
				</button>
			) : (
				<button
					className='form__button form__button__hidden'
					onClick={() =>
						handleClick(options, setOptions, setShowModal, setCreate)
					}
				>
					Add {options && options.toLowerCase().slice(0, options.length - 1)}
				</button>
			)}

			<FormProductDashboard
				showModal={showModal}
				setShowModal={setShowModal}
				refreshProducts={allProducts}
			/>
		</SearchStyles>
	);
};

export default SearchBar;
