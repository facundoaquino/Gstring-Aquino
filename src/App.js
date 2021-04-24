import './App.css'
import DemoCarousel from './componets/carrouselContainer/CarouselContainer'
import ItemListContainer from './componets/container/ItemListContainer'
import Navabar from './componets/Navbar/Navabar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<>
			<Router>
				<Navabar />
				<DemoCarousel />
				<Switch>
					<Route exact path='/'>
						<ItemListContainer   />
					</Route>
					<Route path='/category/:categoryId'>
						<ItemListContainer   />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
