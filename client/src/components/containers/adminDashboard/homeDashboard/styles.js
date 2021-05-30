import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-template-areas: 'sidebar content content';

	.sidebar {
		grid-area: sidebar;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #2d3f4e;
		box-shadow: 1px 0px 10px gray;
		padding: 20px;

		.brand {
			color: #ee362e;
			background: none;
			border: none;
			font-size: 45px;
			font-weight: 600;
			&:hover {
				cursor: pointer;
			}
		}
		.dashboard {
			position: absolute;
			left: 90px;
			top: 73px;
			color: #f8f9f9;
			font-size: 9px;
		}

		.options {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin: 50px 15px;

			.option {
				display: flex;
				align-items: center;
				background: none;
				border: none;
				color: #f8f9f9;
				font-size: 20px;
				margin: 5px 0px;

				.arrow {
					font-size: 15px;
				}
				&:hover {
					cursor: pointer;
				}

				&:active {
					transform: scale(0.9);
					transition: 0.1s;
				}
			}
		}

		.bottomSidebar {
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #f8f9f9;

			.userDiv {
				display: flex;
				.iconDiv {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 60px;
					height: 60px;
					border: none;
					border-radius: 100%;
					background-color: #f8f9f9;

					&:hover {
						cursor: pointer;
					}
					&:active {
						transform: scale(0.9);
						transition: 0.1s;
					}
					.image {
						width: 100%;
						height: 100%;
						border-radius: 100%;
					}
					.icon {
						font-size: 30px;
						color: #58585a;
					}
				}

				.login {
					margin-left: 10px;

					.userName {
						font-size: 18px;
					}

					.signOut {
						font-size: 13px;
						color: #ee362e;

						&:hover {
							cursor: pointer;
						}
					}
				}
			}
			.backStore {
				display: flex;
				flex-direction: column;
				width: 100%;
				margin-top: 20px;
				.separator {
					border-top: 2px solid #f8f9f9;
				}
			}
		}
	}

	.content {
		grid-area: content;
		padding: 0px 50px;
	}
`;
