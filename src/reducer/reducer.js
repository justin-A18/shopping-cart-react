/* eslint-disable no-case-declarations */

export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			const productInCart = state.findIndex(
				(item) => item.id === action.payload.id
			);r

			if (productInCart >= 0) {
				//Structured clone hace copias profundas de los arrays y objetos
				const newCart = structuredClone(state);
				newCart[productInCart].quantity += 1;
				return newCart;
			}

			return [...state, { ...action.payload, quantity: 1 }];

		case 'DECREMENT_QUANTITY_PRODUCT':
			return state.map((product) => {
				if (product.id === action.payload) {
					return {
						...product,
						quantity: Math.max(1, product.quantity - 1),
					};
				}
			});

		case 'REMOVE_FROM_CART':
			return state.filter((product) => product.id !== action.payload);

		case 'CLEAR_CART':
			return action.payload;
	}

	return state;
};
