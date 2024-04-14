import { WIN_PATTERNS } from './win.js';

export const randomId = () => {
	return Math.round(Math.random() * Date.now());
};

export const isWin = (field, currentPlayer) => {
	const newArray = field
		.map((_, index) => index)
		.filter((el) => field[el] === currentPlayer && field[el] !== '');
	return WIN_PATTERNS.some((win) => win.every((el) => newArray.includes(el)));
};
