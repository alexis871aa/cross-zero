import styles from './field.module.css';
import { randomId, onClickField } from '/utils';

export const FieldLayout = ({ field, ...other }) => {
	return (
		<div className={styles.container}>
			{field.map((el, index) => (
				<button
					key={randomId()}
					className={styles.button}
					id={index}
					onClick={(ev) => onClickField(ev.target.id, field, { ...other })}
				>
					{el}
				</button>
			))}
		</div>
	);
};
