import { GameLayout } from '../shared/ui/index.js';
import { store } from './store/store.js';
import { useEffect, useState } from 'react';

export const Game = () => {
	const [, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const onClickClear = () => {
		store.dispatch({ type: 'clear' });
	};

	return <GameLayout onClickClear={onClickClear} />;
};
