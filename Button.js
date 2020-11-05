import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import {ThemeContext} from './themeContext';

function Button() {
	const context = useContext(ThemeContext);
	return (
		<>
			<button 
				onClick={context.toggleTheme} 
				className={`${context.theme}-theme`}
			>Switch Theme</button>
		</>
	)
}

Button.propTypes = {
	theme: PropTypes.oneOf(["light", "dark"])
}

Button.defaultProps = {
	theme: 'light'
}

export default Button;
