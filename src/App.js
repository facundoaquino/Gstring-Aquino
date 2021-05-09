import './App.css'
import DemoCarousel from './componets/carrouselContainer/CarouselContainer'
import ItemListContainer from './componets/container/ItemListContainer'
import Navabar from './componets/Navbar/Navabar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './componets/ItemDetail/ItemDetailContainer'
import Banner from './componets/banner/Banner'

import Offers from './componets/offers/Offers'
import { CartProvider } from './context/CartContext'
import CartContainer from './componets/cart/CartContainer'

function App() {
	return (
		<CartProvider>
			<Router>
				<Navabar />

				<Switch>
					<Route exact path="/">
						<DemoCarousel />
						<Banner />
						<Offers />
						<ItemListContainer />
					</Route>
					<Route path="/category/:categoryId">
						<DemoCarousel />
						<ItemListContainer />
					</Route>
					<Route path="/item/:itemId">
						<ItemDetailContainer />
					</Route>
					<Route path="/cart">
						<CartContainer />
					</Route>
				</Switch>
			</Router>
		</CartProvider>
	)
}

export default App
