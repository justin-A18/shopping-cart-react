import { useId } from 'react';
import { useFilter } from '../hooks/useFilter';
import './Filters.css';

export const Filters = () => {
	const minPriceFilterId = useId();
	const categoryFilterId = useId();
	const { filters, setFilters } = useFilter();

	const handleChangeMinPrice = ({ target }) => {
		setFilters((value) => ({
			...value,
			minPrice: target.value,
		}));
	};

	const handleChangeCategory = ({ target }) => {
		setFilters((value) => ({
			...value,
			category: target.value,
		}));
	};

	return (
		<section className='filters'>
			<div>
				<label htmlFor={minPriceFilterId}>Precio minimo: </label>

				<input
					type='range'
					id={minPriceFilterId}
					min='0'
					max='50'
					onChange={handleChangeMinPrice}
					value={filters.minPrice}
				/>

				<span>${filters.minPrice}</span>
			</div>

			<div>
				<label htmlFor={categoryFilterId}>Category</label>
				<select
					id={categoryFilterId}
					onChange={handleChangeCategory}>
					<option value='all'>Todas</option>
					<option value='programacion'>Programación</option>
					<option value='database'>Base de Datos</option>
					<option value='otros'>Otros</option>
				</select>
			</div>
		</section>
	);
};
