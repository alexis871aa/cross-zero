import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line react-refresh/only-export-components
const Global = createGlobalStyle`
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Global />
		<App />
	</React.StrictMode>,
);
