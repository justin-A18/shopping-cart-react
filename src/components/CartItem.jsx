import PropTypes from 'prop-types';

export const CartItem = ({
	product,
	addToCart,
	removeFromCart,
	decrementQuantity,
}) => {
	return (
		<li>
			<img
				src={product.image}
				alt={product.title}
			/>
			<div>
				<strong>{product.title}</strong> ${product.price}
			</div>
			<footer>
				<small>Cantidad: {product.quantity}</small>
				<button onClick={() => decrementQuantity(product.id)}> - </button>
				<button onClick={() => addToCart(product)}> + </button>
			</footer>
			<button
				style={{ marginTop: '1rem' }}
				onClick={() => removeFromCart(product.id)}>
				Eliminar
			</button>
		</li>
	);
};

CartItem.propTypes = {
	product: PropTypes.object.isRequired,
	addToCart: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	decrementQuantity: PropTypes.func.isRequired,
};
