import React, { useState } from 'react'
import './../container/styles/itemDetail.css'

import ReactImageZoom from 'react-image-zoom'
import Colors from './Colors'
import { useSpring, animated } from 'react-spring'
import master from './../../assets/images/master.png'
import visa from './../../assets/images/visa.png'
import american2 from './../../assets/images/american2.png'

const ItemDetail = ({ pictureUrl, title, description, price, category }) => {
	const [actualImage, setActualImage] = useState(typeof pictureUrl == 'object' ? pictureUrl[0].url : pictureUrl)
	//fixme: se buguea cada tanto el zoom
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

	return (
		<animated.div style={propsSpring} className="productDetail__container">
			<div className="productDetail__image">
				{window.innerWidth <= 768 || category !== 'guitar' ? (
					<img className="detail__image" src={actualImage} alt="" />
				) : (
					<ReactImageZoom {...props} />
				)}
			</div>
			<div className="details__container">
				<h2 className="details__title">{title}</h2>
				{typeof pictureUrl == 'object' && <Colors images={pictureUrl} setImage={setActualImage} />}
				<p className="details__price">{price}</p>
				<button className="detail__buyButton">Comprar</button>
				<p className="details__description">{description}</p>
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
