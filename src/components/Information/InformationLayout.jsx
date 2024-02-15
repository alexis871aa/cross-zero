import styles from './information.module.css';

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
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
