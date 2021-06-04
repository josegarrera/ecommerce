import styled from 'styled-components';

export const ProfileStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;
	background-color: #ffffff;
	padding: 20px;
	border-radius: 1rem;
	object-fit: contain;

	.title__prof {
		color: #ee362c;
		border-bottom: 3px solid rgba(0, 0, 0, 0.1);
	}

	.data {
		display: flex;
		margin-top: 20px;
		.imgDiv {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 150px;
			height: 150px;
			border-radius: 100%;
			.img {
				width: 100%;
				height: 100%;
				border-radius: 100%;
				object-fit: contain;
			}
			.iconProfile {
				width: 70%;
				height: 70%;
				object-fit: contain;
				color: #58585a;
			}
		}

		.right {
			.userData {
				margin: 20px 30px;
				.renglon {
					display: flex;

					.title {
						font-weight: 600;
					}
				}
			}
			.editProfile {
				margin: 0px 30px;
				color: gray;

				&:hover {
					cursor: pointer;
				}
			}
		}
	}
`;
