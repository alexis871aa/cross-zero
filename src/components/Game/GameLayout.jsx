import styles from './game.module.css';
import { InformationContainer, FieldContainer } from '..';
import { onClickClear } from '/utils';
import PropTypes from 'prop-types';

export const GameLayout = (props) => {
	return (
		<div className={styles.container}>
			<InformationContainer {...props}></InformationContainer>
			<FieldContainer {...props}></FieldContainer>
			<button className={styles.clear} onClick={() => onClickClear(props)}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
};
