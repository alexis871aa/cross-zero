/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { Game } from './Game';

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	background-color: #fff8dc;
}
`;

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalStyle />
		<Game />
	</React.StrictMode>,
);
