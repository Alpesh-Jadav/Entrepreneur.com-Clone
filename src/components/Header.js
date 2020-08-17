import React, { useState } from 'react';
import './Header.css';
import { Search } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';

function Header({ setOpenClass }) {
	const [ addClass, setAddClass ] = useState('');

	const searchClick = () => {
		addClass === '' ? setAddClass('search-open') : setAddClass('');
	};
	const openSidebar = () => {
		setOpenClass(true);
	};

	return (
		<div className="Header">
			<div className="Header__container">
				<div className="Header__logoContainer">
					<div className="Header__hamburger" onClick={openSidebar}>
						<div className="line" />
						<div className="line" />
						<div className="line" />
					</div>
					<div className="Header__logo">
						<img
							src="https://assets.entrepreneur.com/static/20190308060624-ENT-India-Logo-White.svg"
							alt="logo"
						/>
					</div>
				</div>
				<div className="Header__NavLinks">
					<div className="nav-link">TECH</div>
					<span>|</span>
					<div className="nav-link">WEALTH</div>
					<span>|</span>
					<div className="nav-link">STARTING A BUSINESS</div>
					<span>|</span>
					<div className="nav-link">SUBSCRIBE</div>
					<span>|</span>
					<div className="nav-link">WOMEN</div>
				</div>

				<div className="Header__search">
					<div className={`search-container ${addClass}`}>
						<input className="textbox" placeholder="Search" type="text" />
					</div>
					<div className="searchBar" onClick={searchClick}>
						{addClass !== '' ? <CloseIcon /> : <Search />}
					</div>
					<div className="avatar">
						<PersonIcon />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Header;
