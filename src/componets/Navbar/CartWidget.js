import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
	const { cart } = useContext(CartContext)
	return (
		<>
			<Link to="/cart">
				<div className="cartIcon__container">
					<i className="fas fa-shopping-cart navbar__cart">
						<small className="cartIcon_total">
							{cart.length && cart.map(({ quantity }) => quantity).reduce((a, b) => a + b)}
						</small>
					</i>
				</div>
			</Link>
		</>
	)
}

export default CartWidget
