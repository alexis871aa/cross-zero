import styles from './field.module.css';
import { randomId } from '../../lib/utils.js';
import { store } from '../../../app/store/store.js';

export const FieldLayout = ({ onClickField, appRender }) => {
	const { field } = store.getState();

	return (
		<div className={styles.fields}>
			{field.map((el, index) => (
				<button
					className={styles.button}
					key={randomId()}
					id={index}
					onClick={({ target }) => onClickField(target.id, appRender)}
				>
					{el}
				</button>
			))}
		</div>
	);
};
