import { GameLayout } from '../shared/ui/index.js';
import { useDispatch } from 'react-redux';

export const Game = () => {
	const dispatch = useDispatch();
	const onClickClear = () => {
		dispatch({ type: 'clear' });
	};

	return <GameLayout onClickClear={onClickClear} />;
};
