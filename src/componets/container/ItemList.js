import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
	return (
		<>
			{products.map((product, i) => (
				<Item key={product.id+i} {...product} />
			))}
		</>
	)
}

export default ItemList
