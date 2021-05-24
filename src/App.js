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
import NotFound from './componets/notFounded/NotFound'
import Order from './componets/order/Order'

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
					<Route exact path="/category/:categoryId">
						<DemoCarousel />
						<ItemListContainer />
					</Route>
					<Route exact path="/item/:itemId">
						<ItemDetailContainer />
					</Route>
					<Route exact path="/cart">
						<CartContainer />
					</Route>
					<Route exact path="/order">
						<Order />
					</Route>
					<Route path="*">
						<NotFound description="Pagina no encontrada" />
					</Route>
				</Switch>
			</Router>
		</CartProvider>
	)
}

export default App
