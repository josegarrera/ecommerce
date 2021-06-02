import styled from 'styled-components';

const Catalogue_Style = styled.div`
	display: flex;
	align-items: center;
	align-items: stretch;
	background-color: #f8f8f8;
	padding: 0rem 5%;

	.filters {
		margin: 8rem 0rem;
	}

	.productsPagination {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		.sort__elements {
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			height: 4rem;
			width: 100%;
			padding-right: 5rem;
		}
	}

	/* 	input[type='checkbox'] {
		appearance: none;
		border: 1px solid #ebeaeb;
		width: 1rem;
		height: 1rem;
		margin-left: 1rem;
		margin-right: 1rem;
		background-color: #ffffff;
		border-radius: 0.2rem;
		cursor: pointer;
	}

	input[type='checkbox']:after {
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
	} */
`;

export default Catalogue_Style;
