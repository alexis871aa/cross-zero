import { isWin } from "./utils";

export const onClickField = (
	id,
	field,
	{ currentPlayer, setCurrentPlayer, setField, isGameEnded, setIsGameEnded, setIsDraw },
) => {
	if (field.at(id) === '' && !isGameEnded) {
		setField((prevField) => {
			const newField = [...prevField];
			newField[id] = currentPlayer;
			return newField;
		});
		const updatedField = field.toSpliced(id, 1, currentPlayer);
		if (isWin(updatedField, currentPlayer)) {
			setIsGameEnded(true);
		} else if (
			!isWin(updatedField, currentPlayer) &&
			!updatedField.some((el) => el === '')
		) {
			setIsDraw(true);
		} else if (
			!isWin(updatedField, currentPlayer) &&
			updatedField.some((el) => el === '')
		) {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	}
};

export const onClickClear = ({
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
}) => {
	setCurrentPlayer('X');
	setIsGameEnded(false);
	setIsDraw(false);
	setField(['', '', '', '', '', '', '', '', '']);
};
