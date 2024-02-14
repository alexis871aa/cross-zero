import styles from './field.module.css';

export const FieldLayout = ({ field }) => {
	return (
		<div className={styles.container}>
			{field.map((el, index) => (
				<button key={index} className={styles.button} id={index}>
					{el}
				</button>
			))}
		</div>
	);
};
