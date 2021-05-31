import React from 'react';
import CommentsBlock from 'simple-react-comments';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

const Reviews = ({id, setUpdateReview, updateReview, allReviews}) => {
	const userId = localStorage.getItem('userId');
	//const [Review, setAllReview] = useState([]);

	/* STYLES */

	const STYLE_BTN = {
		color: 'white',
		background: '#118ab2',
		border: '1px solid transparent',
	};
	const STYLE_COMMENT = {
		paddingBottom: '1.5rem',
		borderBottom: '1px solid rgba(0,0,0,0.1)',
		width: '65rem',
		color: 'rgba(0,0,0,0.7)',
		fontSize: '50px',
	};
	const HOVER_BTN = {
		color: '#118ab2',
		background: 'white',
		border: '1px solid #118ab2',
		boxShadow: '0px 0px 10px',
	};
	/* STYLES */

	const handleOnSumbit = async (review) => {
		try {
			await axios.put(`${URLS.URL_PRODUCTS}/reviews/${id}`, review);
			setUpdateReview(!updateReview);
		} catch (error) {
			console.log(error);
		}
	};

	let FinalReviews =
		allReviews &&
		allReviews.map((el) => {
			return {...el, createdAt: new Date(el.createdAt)};
		});

	return (
		<React.Fragment id='comments'>
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
							marginLeft: '-1.5rem',
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
							avatarUrl: '#comments',
							authorId: userId,
							createdAt: `${new Date()}`,
							fullName: 'Usuario n° ' + userId,
							text,
						});
					}
				}}
			/>
		</React.Fragment>
	);
};

export default Reviews;
