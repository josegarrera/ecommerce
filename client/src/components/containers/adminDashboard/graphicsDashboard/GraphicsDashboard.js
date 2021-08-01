import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GraphicStyled from './styled';
import {
	FaUsers,
	FaAlignLeft,
	FaDolly,
	FaLaptopCode,
	FaTags,
} from 'react-icons/fa';
import CountUp from 'react-countup';

import {URLS} from '../../../../utils/constants';

const GraphicsDashboard = ({setOptions}) => {
	const [Products, setProducts] = useState([]);
	const [Categories, setCategories] = useState([]);
	const [Users, setUsers] = useState([]);
	const [Orders, setOrders] = useState([]);
	const [Brands, setBrands] = useState([]);

	useEffect(() => {
		allProducts();
		return () => {
			setProducts([]);
			setCategories([]);
			setUsers([]);
			setOrders([]);
			setBrands([]);
		};
	}, []);

	const allProducts = async () => {
		let productss = await axios.get(
			`${URLS.URL_PRODUCTS}?name=${undefined}&category=${undefined}&brand=${undefined}&variants=${undefined}&price=${undefined}&order=${undefined}&direction=${undefined}&limit=${Infinity}`
		);
		setProducts(productss.data.products);
		let categoriess = await axios.get(`${URLS.URL_CATEGORIES}`);
		setCategories(categoriess.data.response);
		let userss = await axios.get(`${URLS.URL_USERS}`);
		setUsers(userss.data.response);
		let brandss = await axios.get(`${URLS.URL_BRANDS}`);
		setBrands(brandss.data.response);
		let orderss = await axios.get(`${URLS.URL_USER_ORDERS}/all`);
		setOrders(orderss.data.response);
	};

	return (
		<GraphicStyled>
			<button
				className='graphic'
				name={'Products'}
				onClick={() => setOptions('Products')}
			>
				<FaLaptopCode className='logo1' />
				<div className='texts'>
					<CountUp
						className='number'
						start={0}
						end={Products.length}
						duration={5}
					/>
					<div>Products.</div>
				</div>
			</button>
			<button
				className='graphic'
				name={'Categories'}
				onClick={() => setOptions('Categories')}
			>
				<FaAlignLeft className='logo2' />
				<div className='texts'>
					<CountUp
						className='number'
						start={0}
						end={Categories.length}
						duration={5}
					/>
					<div>Categories.</div>
				</div>
			</button>
			<button
				className='graphic'
				name={'Users'}
				onClick={() => setOptions('Users')}
			>
				<FaUsers className='logo3' />
				<div className='texts'>
					<CountUp
						className='number'
						start={0}
						end={Users.length}
						duration={5}
					/>
					<div>Users.</div>
				</div>
			</button>
			<button
				className='graphic'
				name={'Orders'}
				onClick={() => setOptions('Orders')}
			>
				<FaDolly className='logo4' />
				<div className='texts'>
					<CountUp
						className='number'
						start={0}
						end={Orders.length}
						duration={5}
					/>
					<div>Orders.</div>
				</div>
			</button>
			<button
				className='graphic'
				name={'Brands'}
				onClick={() => setOptions('Brands')}
			>
				<FaTags className='logo5' />
				<div className='texts'>
					<CountUp
						className='number'
						start={0}
						end={Brands.length}
						duration={5}
					/>
					<div>Brands.</div>
				</div>
			</button>
		</GraphicStyled>
	);
};

export default GraphicsDashboard;
