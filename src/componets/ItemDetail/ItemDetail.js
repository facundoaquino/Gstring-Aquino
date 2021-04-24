import React from 'react'
import './../container/styles/itemDetail.css'
const ItemDetail = ({ pictureUrl, title, description ,price}) => {
	return (
		<div className="productDetail__container">
			<div className="productDetail__image">
				<img className="detail__image" src={pictureUrl} alt="" />
			</div>
			<div className="details__container">
				<h2 className='details__title'>{title}</h2>
				<p className="details__description">{description}</p>
                <p className="details__price">{price}</p>
			</div>
		</div>
	)
}

export default ItemDetail
