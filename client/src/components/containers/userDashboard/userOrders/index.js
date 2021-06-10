import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {URLS} from '../../../../utils/constants';
import ListDashboard from '../listDashboardUser/ListDashboardUser';

const UserOrder = () => {
	const [userOrder, setUserOrder] = useState([]);

	const id = localStorage.getItem('userId');

	useEffect(() => {
		async function getOrders() {
			let res = await axios.get(`${URLS.URL_USER_ORDERS}/user?userId=${id}`);
			setUserOrder(res.data.response);
		}
		getOrders();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ListDashboard array={userOrder} Options={'Orders'} />
		</>
	);
};

export default UserOrder;
