import styles from './field.module.css';
import { randomId } from '../../lib/utils.js';
import { useSelector } from 'react-redux';
import { selectField } from '../../../app/selectors/index.js';

export const FieldLayout = ({ onClickField }) => {
	const field = useSelector(selectField);

	return (
		<div className={styles.fields}>
			{field.map((el, index) => (
				<button
					className={styles.button}
					key={randomId()}
					id={index}
					onClick={({ target }) => onClickField(target.id)}
				>
					{el}
				</button>
			))}
		</div>
	);
};
