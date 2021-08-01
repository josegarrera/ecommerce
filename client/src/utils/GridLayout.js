import styled from 'styled-components';

const GridLayout = styled.div`
	width: 100%;
	height: fit-content;
	display: gray;
	grid-template-areas:
		'  nav     nav     nav'
		'sidebar   main    main'
		'   .      main    main'
		'footer   footer  footer';

	.nav {
		grid-area: nav;
	}

	.sidebar {
		grid-area: sidebar;
	}

	.footer {
		grid-area: footer;
	}
`;

export default GridLayout;
