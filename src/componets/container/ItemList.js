import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
	return (
		<>
			{products.map((product, i) => (
				<Item  key={product.id+i} {...product} pictureUrl={typeof product.pictureUrl=='object'?product.pictureUrl[0].url:product.pictureUrl} style={product.category==='guitar'?'guitar__grid':'h_150'} />
			))}
		</>
	)
}

export default ItemList
