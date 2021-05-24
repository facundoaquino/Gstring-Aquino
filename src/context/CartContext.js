import React, { useState } from 'react'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])
	const [orderId, setOrderId] = useState(null)

	const addItem = (itemCart, quantity, path) => {
		if (!path.includes('/item')) {
			const notyf = new Notyf()
			notyf.success({
				message: `Agregaste ${itemCart.title}`,

				duration: 1500,
			})
		}
		const productsInCart = cart.filter(({ item }) => item.id !== itemCart.id)
		setCart([...productsInCart, { item: itemCart, quantity }])
	}
	const isInCart = (id) => {
		return cart.some(({ item }) => item.id === id)
	}
	const removeItem = (id) => {
		const productsFiltered = cart.filter(({ item }) => item.id !== id)
		setCart(productsFiltered)
	}
	const getQuantity = (id) => {
		return cart.find((product) => product.item.id === id)?.quantity || 1
	}
	const clear = () => setCart([])
	return (
		<CartContext.Provider
			value={{ addItem, cart, isInCart, getQuantity, removeItem, clear, setOrderId, orderId, setCart }}
		>
			{children}
		</CartContext.Provider>
	)
}
