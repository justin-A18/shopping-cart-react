import { useContext } from 'react';
import { is_DEVELOPMENT } from '../config.js';
import './Footer.css';
import { FiltersContext } from '../context/filters.js';

export function Footer() {
	const { filters } = useContext(FiltersContext);

	return (
		<footer className='footer'>
			{is_DEVELOPMENT && JSON.stringify(filters, null, 0)}
		</footer>
	);
}
