import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ title, description, price, pictureUrl, stock }) => {

    


	return (
		<div className="product__card">
			<img className="product__img" src={pictureUrl} alt="" />
			<p>{title}</p>
			<p>${price}</p>
			<p>{description}</p>
			<p><span>Stock: </span>{stock}</p>
			<ItemCount stock={stock} initial={1} />
			{!stock && <p className="product__noStock">SIN STOCK</p>}
		</div>
	)
}

export default Item
