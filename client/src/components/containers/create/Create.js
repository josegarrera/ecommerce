import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import CreateStyle from './styled';

const Create = ({options, setCreate, create}) => {
	const handleClick = () => {
		setCreate(!create);
	};

	return (
		<CreateStyle>
			{options === 'Users' ? (
				<div className='container'>
					<AiOutlineClose className='close' onClick={handleClick} />
					<div className='column'>
						<div className='row'>
							<div className='title'>Email: &nbsp;</div>
							<input className='title2'></input>
						</div>
						<div className='row'>
							<div className='title'>Role: &nbsp;</div>
							<input className='title2'></input>
						</div>
					</div>
					<div className='column'>
						<button className='button'>Save</button>
					</div>
				</div>
			) : null}
		</CreateStyle>
	);
};

export default Create;
