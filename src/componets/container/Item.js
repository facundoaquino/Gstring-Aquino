import React from 'react'
import ItemCount from './ItemCount'
import { useSpring, animated } from 'react-spring'
const Item = ({ title, description, price, pictureUrl, stock, style }) => {
	const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } ,config:{duration:500} })
	return (
		<animated.div style={props} className={`product__card ${style}`}>
			<div className="product__imgContainer">
				<img className="product__img" src={pictureUrl} alt="" />
			</div>
			<div className='product_descriptionContainer'>
				<p className='product__title'>{title}</p>
				<p  className='product__price'>${price}</p>
			</div>
			<ItemCount stock={stock} initial={1} product={title} />
			{!stock && <p className="product__noStock">SIN STOCK</p>}
		</animated.div>
	)
}

export default Item
