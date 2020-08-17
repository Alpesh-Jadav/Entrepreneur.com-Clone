import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
import LandingContainer from './components/LandingContainer';
import CompaniesList from './components/CompaniesList';
import Footer from './components/Footer';

function App() {
	const [ openClass, setOpenClass ] = useState(false);

	return (
		<div className="app">
			<div className="app__container">
				<Header setOpenClass={setOpenClass} />
				<LandingContainer openClass={openClass} setOpenClass={setOpenClass} />
				<CompaniesList />
				<Footer />
			</div>
		</div>
	);
}

export default App;
