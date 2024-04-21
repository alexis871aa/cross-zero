import styles from './information.module.css';
import { useSelector } from 'react-redux';
import {
	selectIsDraw,
	selectIsGameEnded,
	selectCurrentPlayer,
} from '../../../app/selectors';

export const InformationLayout = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);

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
