import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {URLS} from '../../../../utils/constants';
import ListDashboard from '../listDashboardUser/ListDashboardUser'

const UserOrder = () => {
	const [userOrder, setUserOrder] = useState([]);

	const id = localStorage.getItem('userId');

	console.log(id);

	useEffect(async () => {
		let res = await axios.get(`${URLS.URL_USER_ORDERS}/user?userId=${id}`);

		console.log(res.data);
		setUserOrder(res.data.response);
	}, []);

	console.log(userOrder);

	return (
		<>
			<ListDashboard array={userOrder} Options={'Orders'} />
		</>
	);
};

export default UserOrder;
