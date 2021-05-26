import React, { useContext, useEffect, useState } from 'react'
import './../container/styles/itemDetail.css'

import ReactImageZoom from 'react-image-zoom'
import Colors from './Colors'
import { useSpring, animated } from 'react-spring'
import master from './../../assets/images/master.png'
import visa from './../../assets/images/visa.png'
import american2 from './../../assets/images/american2.png'
import ItemCount from '../container/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ pictureUrl, title, description, price, categoryId, stock, id }) => {
	const [actualImage, setActualImage] = useState(typeof pictureUrl == 'object' ? pictureUrl[0].url : pictureUrl)
	const { isInCart, getQuantity } = useContext(CartContext)
	const [productInCart, setProductInCart] = useState(isInCart(id))
	useEffect(() => {
		setProductInCart(isInCart(id))
	}, [id, isInCart])
	const props = {
		height: 500,
		scale: 0.8,
		zoomWidth: 100,
		img: actualImage,
		zoomStyle: 'width:300px',
	}
	const propsSpring = useSpring({
		to: { opacity: 1, translateX: 0 },
		from: { opacity: 0, translateX: -1000 },
		config: { duration: 500 },
	})
	const handleAddCart = () => {
		setProductInCart(false)
	}
	useEffect(() => {
		setTimeout(() => {
			window.scroll(0, 1)
		}, 500)
	}, [])

	return (
		<animated.div style={propsSpring} className="productDetail__container">
			<div className="productDetail__image">
				{window.innerWidth <= 768 || categoryId !== 'XlGSMP3LFI52KKeFkkeA' ? (
					<img className="detail__image" src={actualImage} alt="" />
				) : (
					<ReactImageZoom {...props} />
				)}
			</div>
			<div className="details__container">
				<h2 className="details__title">{title}</h2>
				{typeof pictureUrl == 'object' && <Colors images={pictureUrl} setImage={setActualImage} />}
				<p className="details__price">{price}</p>
				<p className="details__description">{description}</p>
				<div className="details__cartState">
					{productInCart ? (
						<>
							<Link to="/cart">
								<button className="detail__buyButton">Terminar mi compra</button>
							</Link>
							<p onClick={handleAddCart} className="details__small">
								Agregar mas al carrito
							</p>
						</>
					) : (
						<ItemCount
							stock={stock}
							initial={getQuantity(id)}
							product={{ title, price, pictureUrl, stock, id }}
						/>
					)}
				</div>
				<div className="details__paymentContainer">
					<p className="details__description">Hasta 3 y 6 cuotas sin interes</p>
					<img src={master} alt="" />
					<img src={visa} alt="" />
					<img src={american2} alt="" />
				</div>
			</div>
		</animated.div>
	)
}

export default ItemDetail
