import styled from 'styled-components';

const TagsInputStyle = styled.div`
	.tags__input {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		min-height: 48px;
		width: 480px;
		border: 1px solid rgb(214, 210, 218);
		border-radius: 6px;
		&:focus-within {
			border: 1px solid #0052cc;
		}
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		align-items: flex-start;
		margin: 8px 0 0 0;
		width: 480px;
	}

	.tag__element {
		background-color: #0288d1;
		border-radius: 0.25rem;
		margin: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		padding: 0.5rem;
		width: 480px;
	}

	.tag__input {
		display: flex;
		align-items: center;
		padding: 1rem;
		width: 100%;
		height: 100%;
		color: #757575;
		border-radius: 0.5rem 0 0 0.5rem;
		font-weight: 600;
		background-color: #ffffff;
		border: 1.5px solid #e0e0e0;
	}

	.submit__tag {
		padding: 0.5rem;
		font-family: 'Poppins' sans-serif;
		background-color: #0395b8;
		font-weight: 500;
		border-radius: 0 0.5rem 0.5rem 0;
		color: #ffffff;
		width: max-content;
		height: 2.5rem;
		align-items: center;
	}

	.input__container {
		display: flex;
	}

	.input__wrapper {
		width: 100%;
	}
	.span__element {
		padding: 0.5rem;
		box-sizing: border-box;
		overflow-y: hidden;
	}
`;

export default TagsInputStyle;
