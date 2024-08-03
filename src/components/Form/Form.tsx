import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Form.module.css';
import { countries } from '../../data/countries';
import { SearchType } from '../../types';
import Alert from '../Alert/Alert';

type FormProps = {
	fetchWeather: () => void;
};

export default function Form({ fetchWeather }: FormProps) {
	const [search, setSearch] = useState<SearchType>({
		city: '',
		country: '',
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		setSearch({
			...search,
			[e.target.name]: e.target.value,
		});
	};

	const [alert, setAlert] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (Object.values(search).includes('')) {
			setAlert('Todos los campos son obligatorios');
			return;
		}

		fetchWeather();
	};
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit}
		>
			{alert && <Alert>{alert}</Alert>}
			<div className={styles.field}>
				<label htmlFor='city'>Ciudad:</label>
				<input
					id='city'
					name='city'
					type='text'
					placeholder='Ciudad'
					value={search.city}
					onChange={handleChange}
				/>
			</div>
			<div className={styles.field}>
				<label htmlFor='country'>Pais:"</label>
				<select
					id='country'
					name='country'
					value={search.country}
					onChange={handleChange}
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
