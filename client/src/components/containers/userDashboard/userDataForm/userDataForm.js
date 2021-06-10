import React, {useState} from 'react';
import {UserFormStyled} from './styled';
import {
	handleInput,
	handleAddress,
	handleAddressDelete,
	handleSubmitUserForm,
} from './utils.js';
import {useHistory} from 'react-router-dom';

const UserDataForm = () => {
	const history = useHistory();
	let userId = window.localStorage.getItem('userId');
	let address = JSON.parse(window.localStorage.getItem('address'));
	let firstName = window.localStorage.getItem('firstName');
	let identification = window.localStorage.getItem('identification');
	let lastName = window.localStorage.getItem('lastName');

	const [input, setInput] = useState({
		firstName: firstName || '',
		lastName: lastName || '',
		shipping: {
			zip_code: address[0] && address[0].zip_code,
			street_name: address[0] && address[0].street_name,
			street_number: address[0] && address[0].street_number,
		},
		address: [],
		identification: identification || '',
		fileValue: '',
		fileData: {},
		file: [],
	});
	const [status, setStatus] = useState({
		init: false,
		completed: false,
	});
	const [errors, setErrors] = useState({});
	const [addressIdGenerator, setAddressIdGenerator] = useState(0);

	return (
		<UserFormStyled>
			<div>
				<form
					className='userForm'
					onSubmit={(e) =>
						handleSubmitUserForm(
							e,
							userId,
							input,
							setInput,
							setErrors,
							setStatus,
							history
						)
					}
				>
					<div className='renglon'>
						<label for='fName' className='title'>
							First name:
						</label>
						&nbsp;
						<input
							className='input'
							type='text'
							id='fName'
							name='firstName'
							value={input.firstName}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
					</div>
					<div className='renglon'>
						<label for='lName' className='title'>
							Last name:
						</label>
						&nbsp;
						<input
							className='input'
							type='text'
							id='lName'
							name='lastName'
							value={input.lastName}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
					</div>
					<div className='renglon'>
						<label for='id' className='title'>
							ID:
						</label>
						&nbsp;
						<input
							className='input'
							type='number'
							id='id'
							name='identification'
							value={input.identification}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
					</div>
					<div className='renglon'>
						<label for='file' className='title'>
							Edit image: &nbsp;
							<input
								id='file'
								name='file'
								type='file'
								accept='image/*'
								value={input.fileValue}
								onChange={(e) =>
									handleInput(e, input, setInput, setStatus, setErrors)
								}
							/>{' '}
						</label>
					</div>
					<div className='renglon'>
						<label for='zip_code' className='title'>
							Zip Code:
						</label>
						&nbsp;
						<input
							className='input'
							type='number'
							id='zip_code'
							name='shipping'
							value={input.shipping.zip_code}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
					</div>
					<div className='renglon'>
						<label for='street_name' className='title'>
							Street Name:
						</label>
						&nbsp;
						<input
							className='input'
							type='text'
							id='street_name'
							name='shipping'
							value={input.shipping.street_name}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
					</div>
					<div className='renglon'>
						<label for='street_number' className='title'>
							Street Number:
						</label>
						&nbsp;
						<input
							className='input'
							type='number'
							id='street_number'
							name='shipping'
							value={input.shipping.street_number}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
					</div>
					<div className='btnAdd'>
						<button
							className='buttonAdd'
							type='button'
							name='address'
							onClick={() =>
								handleAddress(
									input,
									setInput,
									addressIdGenerator,
									setAddressIdGenerator,
									setStatus
								)
							}
						>
							Add address
						</button>
						{errors.shipping ? (
							<p className='danger'>{errors.shipping}</p>
						) : (
							input.address &&
							input.address.map((address, i) => (
								<span key={i + '-span-address'}>
									{' '}
									<label key={i + '-label-address'}>
										{' '}
										{address.street_name + ' ' + address.street_number}{' '}
									</label>{' '}
									<button
										key={i + '-btn-address'}
										id={address.id}
										name='address'
										type='button'
										onClick={(e) => handleAddressDelete(e, setInput)}
									>
										{' '}
										X{' '}
									</button>{' '}
								</span>
							))
						)}
					</div>
					<div className='update'>
						<button
							className='updateBtm'
							key='userDataForm-btn'
							type='submit'
							disabled={
								Object.keys(errors).length || !status.init ? 'disabled' : ''
							}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</UserFormStyled>
	);
};

export default UserDataForm;
