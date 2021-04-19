import React, { useEffect, useState } from 'react'
import { getDataProducts } from '../../helpers/getDataProducts'
import ItemList from './ItemList'
import './styles/main.css'
const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		getDataProducts.then(res=>setProducts(res))
	}, [])
    console.log(products);
	return (
		<main className="main__container">
			 <ItemList products={products}/>
		</main>
	)
}

export default ItemListContainer
