import styles from './game.module.css';
import { InformationContainer, FieldContainer } from '..';
import { onClickClear } from '/utils';

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
