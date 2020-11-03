import React from 'react';

import Header from './Header';
import Button from './Button';
// import {ThemeContextProvider} from './themeContext';

function App() {
	return (
		<div>
			<Header />
			<Button />
		</div>
	);
}

export default App;

// import React, { Component } from "react"
// import Header from "./Header"
// import Username from "./userName"

// function App() {
// 	return (
// 		<Username.Consumer>
// 			{(userName) => (
// 				<div>
// 					<Header />
// 					<main>
// 						<p className="main">No new notifications, {`${userName}`}! 🎉👏</p>
// 					</main>
// 				</div>
// 			)}
// 		</Username.Consumer>
// 	)
// }

// export default App
