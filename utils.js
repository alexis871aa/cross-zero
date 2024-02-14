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
