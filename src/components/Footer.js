import React from 'react';
import './Footer.css';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
	return (
		<div className="footer">
			<div className="footer-contents">
				<div className="footer-container">
					<div className="col-container">
						<div className="col1">
							<h2>COMMERCIAL ENQUIRIES</h2>
							<p>For all commercial enquiries related to Entrepreneur India, please contact</p>
							<div className="sales-link">
								<a href="#">sales@entrepreneurindia.com</a>
							</div>
							<h2>COMPANY</h2>
							<li>
								<h3>Advertise</h3>
							</li>

							<h2 className="margin30">AFFILIATED SITES</h2>
							<ul>
								<li>
									<h3>Franchise India</h3>
								</li>
								<li>
									<h3>Indian Retailer</h3>
								</li>
								<li>
									<h3>Menshealth India</h3>
								</li>
								<li>
									<h3>Restaurant India</h3>
								</li>
								<li>
									<h3>WellnessIndia.com</h3>
								</li>
								<li>
									<h3>EducationBiz.com</h3>
								</li>
								<li>
									<h3>LicenseIndia.com</h3>
								</li>
							</ul>
						</div>
						<div className="col2">
							<h2>EDITORIAL ENQUIRIES</h2>
							<p>For all editorial enquiries related to Entrepreneur India, please contact</p>
							<div className="editor-link">
								<a href="#">editor@entrepreneurindia.com</a>
							</div>

							<h2>PRODUCTS</h2>
							<ul>
								<li>
									<h3>Franchise</h3>
								</li>
								<li>
									<h3>Podcasts</h3>
								</li>
								<li>
									<h3>Publish Your Book</h3>
								</li>
							</ul>
						</div>
						<div className="col3">
							<h2>CONTRIBUTOR ENQUIRIES</h2>
							<p>For all contributor enquiries related to Entrepreneur India, please contact</p>
							<div className="contributor-link">
								<a href="#">contributor@entrepreneurindia.com</a>
							</div>

							<h2>EDITIONS</h2>
							<ul>
								<li>
									<h3>United States</h3>
								</li>
								<li>
									<h3>India</h3>
								</li>
								<li>
									<h3>Asia Pacific</h3>
								</li>
								<li>
									<h3>Middle East</h3>
								</li>
								<li>
									<h3>Europe</h3>
								</li>
								<li>
									<h3>Espanol</h3>
								</li>
								<li>
									<h3>Georgia</h3>
								</li>
								<li>
									<h3>South Africa</h3>
								</li>
							</ul>
						</div>
					</div>
					<div className="footerPhoto-container">
						<div className="title">
							<h2>GET THE MAGAZINE</h2>
						</div>
						<div className="footerImg-container">
							<img
								src="https://assets.entrepreneur.com/content/3x4/600/1596200585-EntrepreneurAugustCover.jpg?width=150"
								alt="Entrepreneur"
							/>
							<div className="subscribe-btn">
								<Button className="sub-btn" variant="contained">
									Subscribe
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-container">
					<div className="social-links-container">
						<div className="footer-logo">
							<img
								src="https://assets.entrepreneur.com/static/20190308060624-ENT-India-Logo-White.svg"
								alt="Logo"
							/>

							<div className="social-links">
								<li className="facebook icon-container">
									<FacebookIcon className="icon" />
								</li>
								<li className="twitter icon-container">
									<TwitterIcon className="icon" />
								</li>
								<li className="linkedIn icon-container">
									<LinkedInIcon className="icon" />
								</li>
								<li className="pinterest icon-container">
									<PinterestIcon className="icon" />
								</li>
								<li className="instagram icon-container">
									<InstagramIcon className="icon" />
								</li>
								<li className="youtube icon-container">
									<YouTubeIcon className="icon" />
								</li>

								{/* <img src="" alt="twitter" />
                            <img src="" alt="linkedIn" />
                            <img src="" alt="pintrest" />
                            <img src="" alt="instagram" />
                            <img src="" alt="youtube" /> */}
							</div>
						</div>
					</div>
					<div className="copyright">
						<div className="last-links">
							<li>Terms of Use</li>
							<span>|</span>
							<li>Privacy Policy</li>
							<span>|</span>
							<li>Cookies Policy</li>
							<span>|</span>
							<li>Site Map</li>
						</div>
						<div className="rights">
							Copyright &copy; 2020 Entrepreneur Media, Inc. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
