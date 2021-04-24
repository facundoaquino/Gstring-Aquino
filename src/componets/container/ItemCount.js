import React, { useEffect, useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const ItemCount = ({ stock, initial, product }) => {
	// Display an error notification
	const [addProduct, setAddProduct] = useState(initial)

	const onAdd = (incremet = 1) => {
		if ((addProduct === stock) && (stock !== 0) &&(incremet!==-1)) {
			const notyf = new Notyf()
			notyf.error({
				message: `Lo sentimos maximo stock para ${product}`,
				dismissible: true,
				duration: 3000,
				backgroundColor: '#e43f5f',
				icon: false,
			})
		}
		if (stock) setAddProduct(addProduct + incremet)
	}
	useEffect(() => {
		if (addProduct < 1 && stock) setAddProduct(1)
		if (addProduct > stock) {
			setAddProduct(stock)
		}
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
