const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'currentPlayer/checked':
			return {
				...state,
				currentPlayer: (state.currentPlayer = payload),
			};
		case 'isGameEnded/checked':
			return {
				...state,
				isGameEnded: (state.isGameEnded = payload),
			};
		case 'isDraw/checked':
			return {
				...state,
				isDraw: (state.isDraw = payload),
			};
		case 'field/add':
			return {
				...state,
				field: (state.field = payload),
			};
		case 'clear':
			return {
				...initialState,
				currentPlayer: (state.currentPlayer = 'X'),
			};
		default:
			return state;
	}
};
