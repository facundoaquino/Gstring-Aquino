 
import './App.css'
import ItemListContainer from './componets/container/ItemListContainer'
import Navabar from './componets/Navbar/Navabar'

function App() {
	return (
		<>
			<Navabar />
		  	<ItemListContainer greeting={'Productos'}/>
		</>
	)
}

export default App
