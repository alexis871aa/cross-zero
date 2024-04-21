import { FieldLayout } from './field-layout.jsx';
import { isWin } from '../../lib/utils.js';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCurrentPlayer,
	selectField,
	selectIsGameEnded,
} from '../../../app/selectors';

export const Field = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const dispatch = useDispatch();

	const onClickField = (id) => {
		if (field.at(id) === '' && !isGameEnded) {
			const updatedField = field.toSpliced(id, 1, currentPlayer);

			if (isWin(updatedField, currentPlayer)) {
				dispatch({ type: 'isGameEnded/checked', payload: true });
			} else if (
				!isWin(updatedField, currentPlayer) &&
				!updatedField.some((el) => el === '')
			) {
				dispatch({ type: 'isDraw/checked', payload: true });
			} else if (
				!isWin(updatedField, currentPlayer) &&
				updatedField.some((el) => el === '')
			) {
				dispatch({
					type: 'currentPlayer/checked',
					payload: currentPlayer === 'X' ? '0' : 'X',
				});
			}

			dispatch({
				type: 'field/add',
				payload: updatedField,
			});
		}
	};

	return <FieldLayout onClickField={onClickField}></FieldLayout>;
};
