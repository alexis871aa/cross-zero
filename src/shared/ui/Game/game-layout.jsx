import styles from './game-layout.module.css';
import { Information, Field } from '../index.js';

export const GameLayout = (props) => {
	return (
		<div className={styles.content}>
			<Information />
			<Field />
			<button className={styles.button} onClick={props.onClickClear}>
				Начать заново
			</button>
		</div>
	);
};
