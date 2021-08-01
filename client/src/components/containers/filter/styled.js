import styled from 'styled-components';

const Filter_Style = styled.div`
	.filter__options {
		margin: 4rem 0rem;
		width: 12rem;
		border-radius: 1rem;
		font-size: 0.7rem;
		background-color: #ffffff;
		border: 1px solid #e0e0e0;
		box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
			0 15px 40px rgba(166, 173, 201, 0.2);
	}

	.filter__title {
		padding: 1rem;
		font-weight: bold;
		color: #616161;
		font-size: 0.7rem;
	}

	.separator {
		border: 0.5px solid #eeeeee;
		width: 100%;
	}

	.filter__section {
		display: flex;
		flex-direction: column;
		padding: 0.5rem;
		margin: 0.3rem;
	}

	.filter__section__title {
		color: #616161;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.filter__section__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.filter__section__icon {
		font-size: 0.7rem;
		color: #a1a3a6;
	}

	.filter__option__items {
		text-decoration: none;
		list-style: none;
	}

	.filter__option__item {
		color: #a3a3a3;
		font-size: 0.7rem;
		font-weight: 600;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}

	.range__price {
		margin-top: 0.5rem;
	}

	.price__input {
		padding: 0.5rem 1rem;
		margin: 0.5rem;
		color: #757575;
		border-radius: 5rem;
		font-size: 0.7rem;
		font-weight: 600;
		background-color: #ffffff;
		border: 1.5px solid #e0e0e0;
		width: 100%;
	}

	.row {
		display: flex;
		margin-top: 1rem;
		justify-content: center;
		align-items: center;

		i {
			color: #9e9e9e;
		}
	}

	.input__wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.color__btn__selected {
		width: 17px;
		height: 17px;
		border-radius: 50%;
		border: 2px solid black;
		transform: scale(1.3);
		box-shadow: inset 0 10px 15px rgba(255, 255, 255, 1),
			inset 0 -10px 15px rgba(0, 0, 0, 0.05),
			inset 10px 0 15px rgba(0, 0, 0, 0.05),
			inset -10px 0 15px rgba(0, 0, 0, 0.05);
	}

	.color__selector {
		display: flex;
		flex-direction: column;
		justify-content: center;

		ul {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			list-style: none;
			width: 100%;
			box-sizing: content-box;
		}

		ul li {
			display: flex;
			font-size: 0.7rem;
			border-radius: 50%;
			margin: 0.5rem;
			cursor: pointer;
			transition: transform 0.3s;
			align-items: center;
		}

		ul li:hover {
			transform: scale(1.1);
		}

		.color_item2 {
			display: flex;
			border: none;

			.color_item_button {
				display: flex;
				border: none;
				background: none;

				.color__btn2 {
					width: 1rem;
					height: 1rem;
				}
			}
		}
		.color__btn {
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
			box-shadow: inset 0 10px 15px rgba(255, 255, 255, 0.35),
				inset 0 -10px 15px rgba(0, 0, 0, 0.05),
				inset 10px 0 15px rgba(0, 0, 0, 0.05),
				inset -10px 0 15px rgba(0, 0, 0, 0.05);
		}
		.color__btn:active {
			box-shadow: inset 0 5px 30px rgba(0, 0, 0, 0.2);
		}

		#white {
			background-color: #eeeeee;
			border: 1px solid #eeeeee;
		}

		#blue {
			background-color: #5067e1;
			border: 1px solid #5067e1;
		}

		#purple {
			background-color: #746ace;
			border: 1px solid #746ace;
		}

		#red {
			background-color: #ff506d;
			border: 1px solid #ff506d;
		}

		#black {
			background-color: #3b3856;
			border: 1px solid #3b3856;
		}

		#yellow {
			background-color: #ffff00;
			border: 1px solid #ffff00;
		}

		#skyblue {
			background-color: #00c6de;
			border: 1px solid #00c6de;
		}
		#silver {
			background-color: #c0c0c0;
			border: 1px solid #c0c0c0;
		}
		#gold {
			background-color: #ffd700;
			border: 1px solid #ffd700;
		}
		#orange {
			background-color: #ffa500;
			border: 1px solid #ffa500;
		}
		#pink {
			background-color: #ffc0cb;
			border: 1px solid #ffc0cb;
		}
		#green {
			background-color: #7cf860;
			border: 1px solid #7cf860;
		}
		.any {
			background-image: url('https://storage.googleapis.com/ecommerce-henry/icono%20any.png');
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
			box-shadow: none;
		}
	}
`;

export default Filter_Style;

// box-shadow: 0 30px 30px -15 rgba(0,0,0,0,3)
