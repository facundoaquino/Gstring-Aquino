import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './order.css'
import db from './../../firebase/firebase'
import { Link, useHistory } from 'react-router-dom'

const Order = () => {
	const { orderId, setOrderId } = useContext(CartContext)
	const [products, setProduct] = useState([])
	const [total, setTotal] = useState('')
	const { clear } = useContext(CartContext)
	const [loading, setLoading] = useState(true)
	const history = useHistory()

	useEffect(() => {
		clear()
		const getData = async () => {
			const ordersCollection = db.collection('orders')
			const orderDoc = ordersCollection.doc(orderId)
			const data = await orderDoc.get()
			const { items, total } = await data.data()
			setTotal(total)
			return items
		}
		if (orderId) {
			getData().then((items) => {
				const itemsCollection = db.collection('items')
				items.forEach((item) => {
					itemsCollection
						.doc(item.id)
						.get()
						.then((data) => {
							const { pictureUrl } = data.data()
							const image = typeof pictureUrl == 'object' ? pictureUrl[0].url : pictureUrl
							setProduct((p) => [...p, { ...item, image }])
						})
				})
				setLoading(false)
			})
		} else {
			history.push('/')
		}
		return () => {
			setOrderId(null)
		}
	}, [orderId, setOrderId, clear, history])

	return (
		<div className="order__container">
			<div>
				<h2>Gracias por tu compra</h2>
				<p className="order__description">Con el numero de orden podes consultar el estado de tu pedido</p>
				<p>
					Numero de orden : <strong>{orderId}</strong>
				</p>
				<p>
					Total: <strong> $ {total}</strong>
				</p>
			</div>
			<div className="orderProducts__container">
				{products.map((product) => (
					<div className="orderProduct__container" key={product.id}>
						<img className="order__image" src={product.image} alt="" />
						<div className="orderProduct__details">
							<h3>{product.title}</h3>
							<p> $ {product.price}</p>
							<Link className="order__link" to={`/item/${product.id}`} target="_blank">
								Ver producto
							</Link>
						</div>
					</div>
				))}
			</div>
			{loading && (
				<div className="order__containerLoader">
					<div className="lds-roller loaderOrder">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Order
