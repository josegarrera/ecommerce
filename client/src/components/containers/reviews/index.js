import React from 'react';
import CommentsBlock from 'simple-react-comments';
import axios from 'axios';
import {URLS} from '../../../utils/constants';
import {store} from 'react-notifications-component';

const Reviews = ({
	id,
	setUpdateReview,
	updateReview,
	allReviews,
	userOrder,
}) => {
	const userId = localStorage.getItem('userId');
	//const [Review, setAllReview] = useState([]);
	const firstName = localStorage.getItem('firstName');
	const profileImage = localStorage.getItem('profileImage');
	/* STYLES */

	const defaultImage =
		'https://res.cloudinary.com/dlexbrcrv/image/upload/v1622767841/Proyects/E-commerce/03f7331cc322295d71005b51072ce40d_i4scje.png';

	const STYLE_BTN = {
		color: 'white',
		background: '#118ab2',
		border: '1px solid transparent',
	};
	const STYLE_COMMENT = {
		paddingBottom: '1.5rem',
		borderBottom: '1px solid rgba(0,0,0,0.1)',
		width: '50vw',
		color: 'rgba(0,0,0,0.7)',
		fontSize: '50px',
		overflow: 'hidden',
	};
	const HOVER_BTN = {
		color: '#118ab2',
		background: 'white',
		border: '1px solid #118ab2',
		boxShadow: '0px 0px 10px',
	};
	/* STYLES */

	const checkUserBuy = () => {
		let filtercompleted =
			userOrder && userOrder.filter((el) => el.state === 'completed');
		if (filtercompleted.length > 0) {
			let canReview =
				filtercompleted &&
				filtercompleted.length &&
				filtercompleted.find((el) =>
					el.items.find((el) => el.product && el.product._id === id)
				);

			return canReview !== undefined ? true : false;
		}
		return false;
	};

	const handleOnSumbit = async (review) => {
		if (checkUserBuy()) {
			try {
				await axios.put(`${URLS.URL_PRODUCTS}/reviews/${id}`, review);
				setUpdateReview(!updateReview);
			} catch (error) {
				console.log(error);
			}
		} else {
			store.addNotification({
				title: 'You can not do that',
				message: 'You must buy the product to leave a review',
				type: 'danger',
				insert: 'top',
				container: 'bottom-right',
				animationIn: ['animate__animated', 'animate__fadeIn'],
				animationOut: ['animate__animated', 'animate__fadeOut'],
				dismiss: {
					duration: 3000,
					onScreen: true,
				},
			});
		}
	};

	let FinalReviews =
		allReviews &&
		allReviews.map((el) => {
			return {...el, createdAt: new Date(el.createdAt)};
		});

	return (
		<div className='div_fragment' id='comments'>
			<h1 className='review_title'>Reviews</h1>
			{allReviews && allReviews.length < 1 && (
				<span className='span_no_review'>
					There are no reviews, be the first!
				</span>
			)}

			<CommentsBlock
				comments={allReviews && FinalReviews}
				//signinUrl={'/login'}
				isLoggedIn={!!userId}
				//reactRouter // set to true if you are using react-router */
				styles={{
					// Use base styles of btn and override background to red
					btn: (base) => ({
						...base,
						...STYLE_BTN,
						'&:hover': HOVER_BTN,
					}),
					// Reset styles of textarea and use new styles
					comment: (base) => ({
						...base,
						...STYLE_COMMENT,
						a: {
							padding: '0',
						},
					}),
					textarea: (base) => ({
						...base,
						border: '1px solid transparent',
						fontSize: '1.2rem',
						'&::placeholder': {
							fontSize: '1.2rem',
						},
						'&:focus-within': {
							border: '1px solid #64dfdf',
						},
					}),
				}}
				onSubmit={(text) => {
					if (text.length > 0) {
						handleOnSumbit({
							authorUrl: '#comments',
							avatarUrl:
								profileImage !== 'undefined' ? profileImage : defaultImage,
							authorId: userId,
							createdAt: `${new Date()}`,
							fullName: firstName ? firstName : 'Anonymous',
							text,
						});
					}
				}}
			/>
		</div>
	);
};

export default Reviews;
