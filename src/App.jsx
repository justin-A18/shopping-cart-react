import { products as initialProducts } from './mooks/products.json';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useFilter } from './hooks/useFilter';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartProvider';

function App() {
	const { filterProducts } = useFilter();
	const filteredProducts = filterProducts(initialProducts);

	return (
		<CartProvider>
			<Header />
			<Cart />
			<Products products={filteredProducts} />
			<Footer />
		</CartProvider>
	);
}

export default App;
