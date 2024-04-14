import styles from './information.module.css';
import { store } from '../../../app/store/store.js';

export const InformationLayout = () => {
	const { isDraw, isGameEnded, currentPlayer } = store.getState();

	return (
		<div className={styles.information}>
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</div>
	);
};
