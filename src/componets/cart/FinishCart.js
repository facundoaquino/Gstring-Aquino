import React, { useContext, useEffect, useState } from 'react'
import { emailsVerifed, errorVerifed, verifedForm } from '../../helpers/errorVerifed'
import './finishCart.css'
import db from './../../firebase/firebase'
import firebase from 'firebase/app'
import { useHistory } from 'react-router'
import { CartContext } from '../../context/CartContext'
const FinishCart = ({ setTrigger, products }) => {
	const [order, setOrder] = useState({ buyer: { name: '', phone: '', email: '' }, items: [], total: 0 })
	const [form, setForm] = useState({ name: '', phone: '', email: '', email2: '' })
	const { setOrderId } = useContext(CartContext)
	const [loading, setLoading] = useState(false)
	const { email, email2, name, phone } = form
	const history = useHistory()
	const handleOrder = () => {
		const orders = db.collection('orders')
		orders.add({ ...order, date: firebase.firestore.Timestamp.fromDate(new Date()) }).then(({ id }) => {
			setOrderId(id)
			history.push('/order')
		})
	}

	const handleForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}
	const handleError = (e) => {
		errorVerifed(e.target.name, e.target.value)
	}
	useEffect(() => {
		setOrder((o) => ({ ...o, buyer: { name, email, phone } }))
	}, [name, email, phone])
	useEffect(() => {
		const productsToOrder = products.map((product) => ({
			id: product.item.id,
			title: product.item.title,
			price: product.item.price,
		}))
		const total = products.reduce((acc, product) => {
			acc = acc + product.item.price * product.quantity
			return acc
		}, 0)
		setOrder((o) => ({ ...o, items: productsToOrder, total }))
	}, [products])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (verifedForm(form) && emailsVerifed(email, email2)) {
			setLoading(true)

			handleOrder()
		}
	}

	return (
		<div className="formContainer">
			<form onSubmit={handleSubmit} className="formContainer__form" action="">
				<label className="form__label" htmlFor="name">
					Nombre y apellido
				</label>
				<input
					placeholder="Juan perez"
					onBlur={handleError}
					onChange={handleForm}
					autoComplete="off"
					className="form__input"
					id="name"
					name="name"
					type="text"
				/>
				<label className="form__label" htmlFor="phone">
					Telefono
				</label>
				<input
					placeholder="  1165155688"
					onBlur={handleError}
					onChange={handleForm}
					autoComplete="off"
					className="form__input"
					id="phone"
					name="phone"
					type="text"
				/>
				<label className="form__label" htmlFor="email">
					Email
				</label>
				<input
					placeholder="email@email.com"
					onBlur={handleError}
					onChange={handleForm}
					autoComplete="off"
					className="form__input"
					id="email"
					name="email"
					type="text"
				/>
				<label className="form__label" htmlFor="email2">
					Repetir Email
				</label>
				<input
					placeholder="email@email.com"
					onBlur={handleError}
					onChange={handleForm}
					autoComplete="off"
					className="form__input"
					id="email2"
					name="email2"
					type="text"
				/>
				<button disabled={loading} className="form__button">
					Comprar
				</button>
				<i onClick={() => setTrigger(false)} className="form__close fas fa-times-circle"></i>
			</form>
			{loading && (
				<div className="lds-roller loaderShop">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
		</div>
	)
}

export default FinishCart
