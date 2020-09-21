import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className='nav'>
			<Link to='/'>HOME</Link>
			<Link to='/about'>ABOUT</Link>
		</div>
	);
}

export default Navigation;
