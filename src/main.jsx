import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.module.css';
import { Game } from './Game';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>,
);
