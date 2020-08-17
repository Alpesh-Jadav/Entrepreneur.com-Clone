import React from 'react';
import './LandingContainer.css';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HeadsetIcon from '@material-ui/icons/Headset';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ForwardIcon from '@material-ui/icons/Forward';
function LandingContainer({ openClass, setOpenClass }) {
	const closeSidebar = () => {
		setOpenClass(false);
	};

	return (
		<div className="landingContainer">
			<div className="landingImage" />
			<div className="landingInfo">
				<div className="info-container">
					<div className="para">
						<h1 className="para-heading">2018 Top Company Cultures List</h1>
						<p>
							Entrepreneur, along with Energage, present our third-annual Top Company Culture List,
							showcasing high-performance cultures across the U.S. We measured these companies focusing on
							24 factors across seven areas: alignment, effectiveness, connection, management, engagement,
							leadership and basics, including pay, benefits and training.
						</p>
						<p>
							Based on the results, we chose 150 companies to be featured in our ranking. We divided the
							companies based on size: small (35-74 employees), medium (75-299 employees) and large (300
							or more employees).
						</p>
						<p className="articletext">Congrats to all.</p>
					</div>
					<div className="info-img">
						<img src="https://tpc.googlesyndication.com/simgad/15051734576502733648?" alt="info-img" />
					</div>
				</div>
			</div>

			<div className={openClass ? `sidebar-container open-sidebar` : `sidebar-container`}>
				<div className="whole-sidebar">
					<div className="side-head">
						<div className="cross" onClick={closeSidebar}>
							<CloseIcon />
						</div>
						<img
							src="https://assets.entrepreneur.com/static/20190308060624-ENT-India-Logo-White.svg"
							alt="logo"
						/>
					</div>
					<div className="side-links">
						<li>
							<PlayArrowIcon className="side-icons" /> <div>video</div>
						</li>
						<li>
							<HeadsetIcon className="side-icons" /> <div>podcasts</div>
						</li>
						<li>
							<MenuBookIcon className="side-icons" /> <div>articles</div>
						</li>
						<li>
							<StoreIcon className="side-icons" /> <div>start a business</div>
						</li>
						<li>
							<ShoppingCartIcon className="side-icons" /> <div>Store</div>
						</li>
						<li>
							<LibraryBooksIcon className="side-icons" /> <div>books</div>
						</li>
					</div>
					<div className="side-dropdown">
						<li>
							<div>franchise</div>
							<ExpandMoreIcon className="expand-arrow" />
						</li>
						<li>
							<div>topics</div>
							<ExpandMoreIcon className="expand-arrow" />
						</li>
						<li>
							<div>magazine</div>
							<ExpandMoreIcon className="expand-arrow" />
						</li>
						<li>
							<div>editions</div>
							<ExpandMoreIcon className="expand-arrow" />
						</li>
						<li>
							<div>other</div>
							<ExpandMoreIcon className="expand-arrow" />
						</li>
						<li>
							<div>site map</div>
						</li>
					</div>
				</div>
				<div className="last-child" />
			</div>

			<div>
				<div className="bell-container">
					<div className="red">
						<div className="white">
							<NotificationsIcon className="bell" />
						</div>
					</div>
					<div className="subscribe-container">
						<div className="subscription-text">Subscribe to notifications</div>
						<ForwardIcon className="forward-icon" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingContainer;
