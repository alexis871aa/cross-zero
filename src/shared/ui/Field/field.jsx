import { FieldLayout } from './field-layout.jsx';
import { isWin } from '../../lib/utils.js';
import { store } from '../../../app/store/store.js';

const onClickField = (id, appRender) => {
	const { field, currentPlayer, isGameEnded } = store.getState();

	if (field.at(id) === '' && !isGameEnded) {
		const updatedField = field.toSpliced(id, 1, currentPlayer);

		if (isWin(updatedField, currentPlayer)) {
			store.dispatch({ type: 'isGameEnded/checked', payload: true });
		} else if (
			!isWin(updatedField, currentPlayer) &&
			!updatedField.some((el) => el === '')
		) {
			store.dispatch({ type: 'isDraw/checked', payload: true });
		} else if (
			!isWin(updatedField, currentPlayer) &&
			updatedField.some((el) => el === '')
		) {
			store.dispatch({
				type: 'currentPlayer/checked',
				payload: currentPlayer === 'X' ? '0' : 'X',
			});
		}

		store.dispatch({
			type: 'field/add',
			payload: updatedField,
		});
	}
	appRender();
};

export const Field = ({ appRender }) => {
	return <FieldLayout onClickField={onClickField} appRender={appRender}></FieldLayout>;
};
