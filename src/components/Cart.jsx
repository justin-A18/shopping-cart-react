import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css';
import { CartItem } from './CartItem';
import { useCart } from '../hooks/useCart';

export const Cart = () => {
	const cartCheckboxId = useId();

	const { state, clearCart, removeFromCart, addToCart, decrementQuantity } =
		useCart();

	return (
		<>
			<label
				className='cart-button'
				htmlFor={cartCheckboxId}>
				<CartIcon />
			</label>

			<input
				type='checkbox'
				hidden
				id={cartCheckboxId}
			/>

			<aside className='cart'>
				<ul>
					{state.map((product) => (
						<CartItem
							key={product.id}
							product={product}
							addToCart={addToCart}
							removeFromCart={removeFromCart}
							decrementQuantity={decrementQuantity}
						/>
					))}
				</ul>

				<button onClick={clearCart}>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	);
};
