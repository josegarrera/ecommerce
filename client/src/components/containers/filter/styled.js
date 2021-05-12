import styled from 'styled-components';

const Filter_Style = styled.div`
	.filter__options {
		height: 900px;
		width: 25rem;
		border-radius: 1rem;
		background-color: #ffffff;
	}

	.filter__title {
		padding: 1.5rem;
		font-weight: bold;
		color: #a1a3a6;
	}

	.separator {
		border: 1px solid #fafafa;
		width: 100%;
	}

	.filter__section {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		border: 1px solid red;
		height: 100%;
	}

	.filter__section__title {
		font-weight: 600;
		color: #a1a3a6;
	}

	.filter__section__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.filter__section__icon {
		font-size: 1.5rem;
		color: #a1a3a6;
	}

	.filter__option__items {
		text-decoration: none;
		list-style: none;
	}

	.filter__option__item {
		color: #a3a3a3;
		font-size: 0.8rem;
		font-weight: 600;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
`;

export default Filter_Style;
