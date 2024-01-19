import './Products.css';
import PropTypes from 'prop-types';
import { AddToCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

export const Products = ({ products = [] }) => {
	const { addToCart } = useCart();

	return (
		<main className='products'>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<img
							src={product.image}
							alt={product.title}
						/>
						<div>
							<strong>{product.title}</strong> - ${product.price}
						</div>
						<div>
							<button onClick={() => addToCart(product)}>
								<AddToCartIcon />
							</button>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
};

Products.propTypes = {
	products: PropTypes.array.isRequired,
};
