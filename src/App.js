 
import './App.css'
import DemoCarousel from './componets/carrouselContainer/CarouselContainer'
import ItemListContainer from './componets/container/ItemListContainer'
import Navabar from './componets/Navbar/Navabar'
 
function App() {
	return (
		<>
			<Navabar />
			<DemoCarousel/>
		  	<ItemListContainer greeting={'Productos'}/>
			 
		</>
	)
}

export default App
