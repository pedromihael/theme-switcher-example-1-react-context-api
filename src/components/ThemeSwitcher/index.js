import React from 'react';

const ThemeSwitcher = (props) => (
	<button onClick={props.setTheme}>
		Switch theme
	</button>
);

export default ThemeSwitcher;