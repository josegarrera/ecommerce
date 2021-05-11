import React from 'react';
import {Link} from 'react-router-dom';
import {IoCart, IoHeart, IoPersonSharp} from 'react-icons/io5';
import SearchBar from '../../containers/searchBar/SearchBar';
import DivNavBar from './styled';

const NavBar = () => {
	return (
		<DivNavBar>
			<div className='topNav'>
				<div>
					<Link to='/'>
						<h3 className='logo'>{'< Store! />'}</h3>
					</Link>
				</div>
				<div>
					<SearchBar />
				</div>
				<div className='topRight'>
					<div className='iconDiv'>
						<IoPersonSharp className='icon' />
					</div>
					<div className='iconDiv'>
						<IoHeart className='icon' />
					</div>
					<div className='iconDiv'>
						<IoCart className='icon' />
					</div>
				</div>
			</div>
			<div className='bottomNav'>
				<Link to='/catalogue'>Catalogue</Link>
				<Link to='/create'>Create</Link>
				<select className='select'>
					<option selected value='0'>
						{' '}
						Perifericos{' '}
					</option>
				</select>
				<select className='select'>
					<option selected value='0'>
						{' '}
						Monitores{' '}
					</option>
				</select>
				<select className='select'>
					<option selected value='0'>
						{' '}
						Sillas{' '}
					</option>
				</select>
				<select className='select'>
					<option selected value='0'>
						{' '}
						Auriculares{' '}
					</option>
				</select>
				<select className='select'>
					<option selected value='0'>
						{' '}
						Memorias{' '}
					</option>
				</select>
				<select className='select'>
					<option selected value='0'>
						{' '}
						Placas{' '}
					</option>
				</select>
				<select className='select'>
					<option selected value='0'>
						{' '}
						Motherboard{' '}
					</option>
				</select>
			</div>
		</DivNavBar>
	);
};

export default NavBar;
