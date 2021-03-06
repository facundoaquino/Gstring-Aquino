import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Cart } from './Cart'
import './cartStyles.css'
const CartContainer = () => {
	const { cart, removeItem, clear } = useContext(CartContext)

	return (
		<div className="cart__container">
			{cart.length ? (
				<Cart products={cart} removeItem={removeItem} clear={clear} />
			) : (
				<>
					<h2>El carrito se encuetra vacio</h2>
					<Link to="/">
						<button className="cart__backButton">Volver</button>
					</Link>
				</>
			)}
		</div>
	)
}

export default CartContainer
