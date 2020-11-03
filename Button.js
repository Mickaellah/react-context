import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ThemeContextConsumer} from './themeContext';

function Button(props) {
	return (
		<>
			<ThemeContextConsumer>
				{(theme) => (
					<button className={`${theme}-theme`}>Switch Theme</button>
				)}
			</ThemeContextConsumer>
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
