import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './app/Game.jsx';
import './app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>,
);
