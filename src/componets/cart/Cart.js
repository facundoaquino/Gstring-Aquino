import React, { useState } from 'react'

import FinishCart from './FinishCart'

export const Cart = ({ products, removeItem, clear }) => {
	const [trigger, setTrigger] = useState(false)

	return (
		<>
			{products.map((product) => (
				<div key={product.item.id} className="cartItem__gridContainer">
					<img
						src={
							typeof product.item.pictureUrl == 'object'
								? product.item.pictureUrl[0].url
								: product.item.pictureUrl
						}
						alt=""
					/>
					<h3>{product.item.title}</h3>
					<p>${product.item.price}</p>
					<p>Cantidad: {product.quantity}</p>
					<p className="cartItem__total">TOTAL: ${product.quantity * product.item.price}</p>
					<p onClick={() => removeItem(product.item.id)} className="cartItem__delete">
						Quitar <i className="far fa-trash-alt"></i>
					</p>
				</div>
			))}
			<div className="cart__details">
				<button
					onClick={() => {
						setTrigger(true)
					}}
					className="form__button"
				>
					Terminar Compra
				</button>
				<p className="cart__total">
					Total: $
					{products.reduce((acc, product) => {
						acc = acc + product.item.price * product.quantity
						return acc
					}, 0)}
				</p>
				<p onClick={clear} className="cartItem__delete cartItem__clear">
					Vaciar Carrito <i className="fas fa-trash-alt"></i>
				</p>
			</div>
			{trigger && <FinishCart products={products} setTrigger={setTrigger} />}
		</>
	)
}
