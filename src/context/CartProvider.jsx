import PropTypes from 'prop-types';
import { CartContext } from './cart';
import { useReducer } from 'react';
import { reducer } from '../reducer/reducer';

export const CartProvider = ({ children }) => {
	const initialState = [];
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
