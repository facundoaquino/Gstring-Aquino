import React, { useState } from 'react'
import './../container/styles/itemDetail.css'

import ReactImageZoom from 'react-image-zoom'
import Colors from './Colors'
const ItemDetail = ({ pictureUrl, title, description, price ,category }) => {
	const [actualImage, setActualImage] = useState(typeof pictureUrl == 'object' ? pictureUrl[0].url : pictureUrl)

	const props = {
		height: 500,
		scale: 1,
		zoomWidth: 1000,
		img: actualImage,
		zoomStyle: 'width:500px',
		offset: { vertical: 10, horizontal: 10 },
	}

	return (
		<div className="productDetail__container">
			<div className="productDetail__image">
				{window.innerWidth <= 768 || category !== 'guitar' ? (
					<img className="detail__image" src={pictureUrl} alt="" />
				) : (
					<ReactImageZoom {...props} />
				)}
			</div>
			<div className="details__container">
				<h2 className="details__title">{title}</h2>
				<p className="details__description">{description}</p>
				{typeof pictureUrl == 'object' && <Colors images={pictureUrl} setImage={setActualImage} />}
				<p className="details__price">{price}</p>
			</div>
		</div>
	)
}

export default ItemDetail
