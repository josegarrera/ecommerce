import React, {useState} from 'react';
import {ProfileStyled} from '../userProfile/styled.js';
import {
	handleInput,
	handleAddress,
	handleAddressDelete,
	handleSubmitUserForm,
} from './utils.js';

const UserDataForm = () => {
	const [input, setInput] = useState({
		firstName: '',
		lastName: '',
		shipping: {
			zip_code: '',
			street_name: '',
			street_number: '',
		},
		address: [],
		identification: '',
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
	const userId = window.localStorage.getItem('userId');

	return (
		<ProfileStyled>
			<div>
				<form
					onSubmit={(e) =>
						handleSubmitUserForm(
							e,
							userId,
							input,
							setInput,
							setErrors,
							setStatus
						)
					}
				>
					<div>
						<label for='fName'>First name:</label>
						<input
							type='text'
							id='fName'
							name='firstName'
							value={input.firstName}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
						<label for='lName'>Last name:</label>
						<input
							type='text'
							id='lName'
							name='lastName'
							value={input.lastName}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
						<label for='id'>ID:</label>
						<input
							type='number'
							id='id'
							name='identification'
							value={input.identification}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
						<label for='file'>
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
							Edit image
						</label>
					</div>
					<div>
						<h5>Shipping address</h5>
						<label for='zip_code'>Zip Code:</label>
						<input
							type='number'
							id='zip_code'
							name='shipping'
							value={input.shipping.zip_code}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
						<label for='street_name'>Street Name:</label>
						<input
							type='text'
							id='street_name'
							name='shipping'
							value={input.shipping.street_name}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
						<label for='street_number'>Street Number:</label>
						<input
							type='number'
							id='street_number'
							name='shipping'
							value={input.shipping.street_number}
							onChange={(e) =>
								handleInput(e, input, setInput, setStatus, setErrors)
							}
						/>
						<button
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
							Add
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
					<button
						key='userDataForm-btn'
						type='submit'
						disabled={
							Object.keys(errors).length || !status.init ? 'disabled' : ''
						}
					>
						Submit
					</button>
				</form>
			</div>
		</ProfileStyled>
	);
};

export default UserDataForm;
