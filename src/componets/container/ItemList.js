import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
	return (
		<>
			{products.map((product, i) => (
				<Item
					key={product.id}
					{...product}
					pictureUrl={typeof product.pictureUrl == 'object' ? product.pictureUrl[0].url : product.pictureUrl}
					style={product.categoryId === 'XlGSMP3LFI52KKeFkkeA' ? 'guitar__grid' : 'h_150'}
				/>
			))}
		</>
	)
}

export default ItemList
