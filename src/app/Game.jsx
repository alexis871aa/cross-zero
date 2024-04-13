import { useState } from 'react';
import { GameLayout } from '../shared/ui/index.js';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			field={field}
			setField={setField}
		/>
	);
};
