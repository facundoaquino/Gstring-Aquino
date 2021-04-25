import React from 'react'
import './../container/styles/itemDetail.css'
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
const ItemDetail = ({ pictureUrl, title, description ,price}) => {
	const props = { height: 500,scale:1, zoomWidth:1000, img: pictureUrl, zoomStyle:'width:500px' , offset:{vertical: 10, horizontal: 10}};
	return (
		<div className="productDetail__container">
			<div className="productDetail__image">
				{/* <img className="detail__image" src={pictureUrl} alt="" /> */}
			 <ReactImageZoom {...props} /> 
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
