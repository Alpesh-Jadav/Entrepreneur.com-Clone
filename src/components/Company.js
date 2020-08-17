import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Company({
	id,
	index,
	logo,
	name,
	flag,
	location,
	sector,
	about,
	companyPhoto,
	foundingYear,
	usEmployees,
	website
}) {
	const activateClass = (id) => {
	
		const first = document.getElementById(id);
		const children = first.children[0];
		const depth = children.children[1];

	

		if (depth.classList.contains('dropdown-container')) {
			depth.classList.remove('dropdown-container');
		} else {
			depth.classList.add('dropdown-container');
		}
	};

	return (
		<li id={id} onClick={() => activateClass(id)}>
			<div>
				<div className="company-details">
					<div className="index">{index}</div>
					<div className="company-logo">
						<img src={logo} alt="Company-logo" />
					</div>
					<div className="company-name">
						<h2>{name}</h2>
					</div>
					<div className="company-location">
						<div className="flag">
							<img src={flag} alt="flag" />
						</div>
						<div className="location-name">
							<h2>{location}</h2>
						</div>
					</div>
					<div className="company-sector">
						<h2>{sector}</h2>
					</div>
				</div>

				<div className="dropdown-hider">
					<div className="about-container">
						<p>{about}</p>
					</div>
					<div className="company-description">
						<div className="photo">
							<img src={companyPhoto} alt="company" />
						</div>
						<div className="description-container">
							<div className="genral-info">
								<div className="fields-name">
									<div className="field-title">Location</div>
									<div className="field-value first-field">
										<img src={flag} alt="flag" />
										<div>{location}</div>
									</div>
								</div>
								<hr />
								<div className="fields-name">
									<div className="field-title">Year Founded</div>
									<div className="field-value">{foundingYear}</div>
								</div>
								<hr />
								<div className="fields-name">
									<div className="field-title">Sector</div>
									<div className="field-value">{sector}</div>
								</div>
								<hr />
								<div className="fields-name">
									<div className="field-title"># of U.S. Employees</div>
									<div className="field-value">{usEmployees}</div>
								</div>
								<hr />
								<div className="fields-name">
									<div className="field-title">Website</div>
									<div className="field-value">
										<a href="#">{website}</a>
									</div>
								</div>
								<hr />
							</div>
							<div className="company-links">
								<div className="home-icon link-icon">
									<HomeIcon className="home" />
								</div>
								<div className="facebook-icon link-icon">
									<FacebookIcon className="home" />
								</div>
								<div className="twitter-icon link-icon">
									<TwitterIcon className="home" />
								</div>
								<div className="linkedIn-icon link-icon">
									<LinkedInIcon className="home" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}

export default Company;
