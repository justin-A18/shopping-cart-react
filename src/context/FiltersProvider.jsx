import PropTypes from 'prop-types';
import { FiltersContext } from './filters';
import { useState } from 'react';

//2. Crear el Provider, para proveer el context. Es quien va embolver nuestra aplicacion

export const FiltersProvider = ({ children }) => {
	const [filters, setFilters] = useState({
		category: 'all',
		minPrice: 0,
	});

	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
};

FiltersProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
