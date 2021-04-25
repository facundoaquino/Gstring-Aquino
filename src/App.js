import './App.css'
import DemoCarousel from './componets/carrouselContainer/CarouselContainer'
import ItemListContainer from './componets/container/ItemListContainer'
import Navabar from './componets/Navbar/Navabar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemDetailContainer from './componets/ItemDetail/ItemDetailContainer'

function App() {
	return (
		<>
			<Router>
				<Navabar />
				<Switch>
					<Route exact path="/">
						<DemoCarousel />
						<ItemListContainer />
					</Route>
					<Route path="/category/:categoryId">
						<DemoCarousel />
						<ItemListContainer />
					</Route>
					<Route   path="/item/:itemId">
						<ItemDetailContainer />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
