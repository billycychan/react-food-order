import Header from "./components/Headers";
import Meals from "./components/Meals";
import Cart from "./components/Cart";

import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
	return (
		<UserProgressContextProvider>
			<CartContextProvider>
				<Header />
				<Meals />
				<Cart />
			</CartContextProvider>
		</UserProgressContextProvider>
	);
}

export default App;
