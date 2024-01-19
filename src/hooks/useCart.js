import { useContext } from 'react';
import { CartContext } from '../context/cart';

export const useCart = () => {
	const { state, dispatch } = useContext(CartContext);

	const addToCart = (product) => {
		dispatch({
			type: 'ADD_TO_CART',
			payload: product,
		});
	};

	const removeFromCart = (productId) => {
		dispatch({
			type: 'REMOVE_FROM_CART',
			payload: productId,
		});
	};

	const decrementQuantity = (product) => {
		dispatch({
			type: 'DECREMENT_QUANTITY_PRODUCT',
			payload: product,
		});
	};

	const clearCart = (initialState = []) => {
		dispatch({
			type: 'CLEAR_CART',
			payload: initialState,
		});
	};
	return {
		state,
		addToCart,
		removeFromCart,
		decrementQuantity,
		clearCart,
	};
};
