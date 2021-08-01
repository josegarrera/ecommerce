import axios from 'axios';
import React, {useRef} from 'react';
import ResetSteps from './resetSteps/ResetSteps';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';
import {URLS} from '../../../utils/constants';

const Reset = () => {
	const history = useHistory();
	const [data, setData] = useState({
		email: '',
		resetCode: '',
		step: 1,
	});
	const [loading, setLoading] = useState(false);
	const buttonRef = useRef(null);

	const handleSubmits = (input, _step) => {
		switch (_step) {
			case 1:
				setLoading(true);
				axios
					.put(`${URLS.URL_AUTH}/forgotPassword`, {email: input})
					.then((res) => {
						if (res.data.ok) {
							setData({
								...data,
								email: input,
								step: 2,
							});
						}
					})
					.catch((err) => {
						if (err.response.status === 404) {
							Swal.fire({
								title: 'something goes wrong',
								text: 'check if your email is correct',
								icon: 'error',
								confirmButtonText: 'Ok',
							});
						} else {
							Swal.fire({
								title: 'something goes wrong',
								text: 'try again!',
								icon: 'warning',
								confirmButtonText: 'Ok',
							});
						}
					})
					.finally(() => setLoading(false));
				break;
			case 2:
				setLoading(true);
				axios
					.put(`${URLS.URL_AUTH}/resetPassword`, {
						email: data.email,
						resetCode: input.toString(),
						step: '1',
					})
					.then((res) => {
						if (res.data.ok) {
							setData({
								...data,
								resetCode: input,
								step: 3,
							});
						}
					})
					.catch((err) => {
						if (err.response.status === 400) {
							Swal.fire({
								title: 'something goes wrong',
								text: err.response.data.message,
								icon: 'warning',
								confirmButtonText: 'Ok',
							});
						} else {
							Swal.fire({
								title: 'something goes wrong',
								text: err.response.data.message,
								icon: 'warning',
								confirmButtonText: 'Ok',
							});
						}
					})
					.finally(() => setLoading(false));
				break;
			case 3:
				setLoading(true);
				axios
					.put(`${URLS.URL_AUTH}/resetPassword`, {
						email: data.email,
						resetCode: data.resetCode,
						step: '2',
						password: input,
					})
					.then((res) => {
						if (res.data.ok) {
							Swal.fire({
								title: 'Password restored',
								text: 'ok',
								icon: 'success',
								confirmButtonText: 'Ok',
							}).finally(() => {
								history.push('/');
							});
						}
					})
					.catch(() => {
						Swal.fire({
							title: 'something goes wrong',
							text: 'the catch',
							icon: 'warning',
							confirmButtonText: 'Ok',
						});
					})
					.finally(() => setLoading(false));
				break;
			default:
				break;
		}
	};
	return (
		<>
			<ResetSteps
				handleSubmit={handleSubmits}
				step={data.step}
				loading={loading}
				buttonRef={buttonRef}
			/>
		</>
	);
};

export default Reset;
