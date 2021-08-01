import styled from 'styled-components';

const CreateStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	background-color: #ffffff;
	border-radius: 10px;
	color: #58585a;
	margin: 20px auto;
	padding: 20px 10px;

	.container {
		display: flex;
		flex-direction: column;
	}

	.column {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
		flex-direction: column;
		margin: 10px 0px;
	}

	.button {
		margin: auto 0;
		-ms-flex-item-align: end;
		color: #ffffff;
		background-color: #ee362e;
		border: none;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 17px;
		letter-spacing: 3px;
		height: 28px;
		width: 15%;
		margin: 20px;
		display: flex;
		justify-content: center;
		border: 1px solid #ee362e;
		align-items: center;
	}

	.button:hover {
		background: #ffffff;
		border: 1px solid #ee362c;
		color: #ee362c;
	}

	.createTitle {
		font-size: 23px;
		font-weight: 600;
	}

	.title {
		display: flex;
		align-items: center;
		font-weight: 600;
	}

	.close-container {
		display: flex;
		justify-content: flex-end;
	}

	.button-container {
		display: flex;
		justify-content: flex-end;
	}

	.radio-button {
	}
	.option {
		font-weight: 400;
		margin: 0px 15px 0px 3px;
	}

	.variants-container {
		display: flex;
	}

	.close-button {
		display: inline;
		width: 7%;
	}

	.variants {
		display: inline;
		width: 20%;
		margin-right: 10px;
	}

	.close {
		align-items: flex-end;
		object-fit: contain;
		color: #58585a;
		font-size: 25px;
		margin: 0;

		&:hover {
			cursor: pointer;
		}

		&:active {
			transform: scale(0.9);
		}
	}
`;

// const CreateStyle = styled.div`
// 	display: flex;
//     justify-content: space-around;
// 	width: 80%;
// 	margin: 10px 0px;
// 	padding: 10px 10px;
// 	background-color: #ffffff;
// 	border-radius: 10px;
// 	color: #58585a;

//     .productInfo {
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-start;
//         margin-left: 35px;

//         .renglon {
//             display: flex;
//             margin: 10px;
//             justify-content: space-between;
//         }

//         .column {
//             display: flex;
//             align-items: center;
//         }

//         .title {
//             display: flex;
//             align-items: center;
//             font-weight: 600;
//         }

//         .title2 {
//             display: flex;
//             align-items: center;
//             font-weight: 600;

//             &:hover {
//                 cursor: pointer;
//             }

//             .open {
//                 margin-left: 5px;
//                 font-size: 16px;

//                 &:active {
//                     transform: scale(0.9);
//                 }
//             }
//         }

//         .accordionItems {
//             margin-left: 20px;
//             font-size: 14px;
//         }
//     }
// }
// .buttons {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     width: 20%;

//     .buttonDiv {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: 30px;
//         height: 30px;
//         background: none;
//         border: none;

//         .button {
//             object-fit: contain;
//             color: #58585a;
//             font-size: 25px;

//             &:hover {
//                 cursor: pointer;
//             }

//             &:active {
//                 transform: scale(0.9);
//             }
//         }
//     }
// `;

export default CreateStyle;
