import React, { useEffect, useState } from 'react'

const ItemCount = ({ stock, initial }) => {
	const [addProduct, setAddProduct] = useState(initial)

	const onAdd = (incremet = 1) => {
		if (stock) setAddProduct(addProduct + incremet)
	}
	useEffect(() => {
		if (addProduct < 1 && stock) setAddProduct(1)
		if (addProduct > stock) setAddProduct(stock)
	}, [addProduct, stock, setAddProduct])

	return (
		<div className="product__countContainer">
			<div className="product__addContainer">
				<i onClick={() => onAdd(-1)} className="fas fa-minus product__operation"></i>
				{addProduct}
				<i onClick={() => onAdd()} className="fas fa-plus product__operation"></i>
			</div>
			<button disabled={!Boolean(stock)} className="main__button">
				COMPRAR
			</button>
		</div>
	)
}

export default ItemCount
