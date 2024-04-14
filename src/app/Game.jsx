import { GameLayout } from '../shared/ui/index.js';
import { useRenderFields } from '../shared/hooks/useRenderFields.js';
import { store } from './store/store.js';

export const Game = () => {
	const { appRender } = useRenderFields();

	const onClickClear = () => {
		store.dispatch({ type: 'clear' });
		appRender();
	};

	return <GameLayout appRender={appRender} onClickClear={onClickClear} />;
};
