import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	height: fit-content;
	display: grid;
	grid-template-areas: 'sidebar content content';

	.sidebar {
		grid-area: sidebar;
	}

	.content {
		grid-area: content;
	}
`;
