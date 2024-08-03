import styles from "./Form.module.css"
import { countries } from '../../data/countries';

export default function Form() {
	return (
		<form className={styles.form}>
			<div className={styles.field}>
				<label htmlFor='city'>Ciudad:</label>
				<input
					id='city'
					type='text'
					name='city'
					placeholder='Ciudad'
				/>
			</div>
			<div className={styles.field}>
				<label htmlFor='country'>Pais:"</label>
				<select
					name='country'
					id='country'
				>
					<option value=''>-- Seleccione un Pais</option>
					{countries.map((country) => (
						<option
							key={country.code}
							value={country.code}
						>
							{country.name}
						</option>
					))}
				</select>
			</div>
			<input
				type='submit'
				value='Consultar Clima'
                className={styles.submit}
			/>
		</form>
	);
}
