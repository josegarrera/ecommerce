import React, {useState, useEffect} from 'react';
import CommentsBlock from 'simple-react-comments';
import axios from 'axios';
import {URLS} from '../../../utils/constants';

const Reviews = ({id, setUpdateReview, updateReview, allReviews}) => {
	const userId = localStorage.getItem('userId');
	//const [Review, setAllReview] = useState([]);

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
						color: 'white',
						background: 'red',

						'&:hover': {
							color: 'red',
							background: 'white',
							border: '1px solid red',
						},
					}),
					// Reset styles of textarea and use new styles
				}}
				onSubmit={(text) => {
					if (text.length > 0) {
						handleOnSumbit({
							authorUrl: '#comments',
							avatarUrl: '#comments',
							authorId: userId,
							createdAt: `${new Date()}`,
							fullName: userId,
							text,
						});
					}
				}}
			/>
		</React.Fragment>
	);
};

export default Reviews;
