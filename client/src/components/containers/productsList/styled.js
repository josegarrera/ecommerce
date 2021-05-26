import styled from 'styled-components';

const Products_List_Style = styled.div`
	display: flex;
	justify-content: center;

	.cards__container {
		display: flex;
		justify-content: center;
		align-content: flex-start;
		padding: 0rem 2rem;
		flex-wrap: wrap;

		.notFound {
			width: 75%;
		}
	}
`;

export default Products_List_Style;
