import React from 'react'
import ItemCount from './ItemCount'
import { useSpring, animated } from 'react-spring'
import { Link, useLocation } from 'react-router-dom'
import closeMenu from '../../helpers/closeMenu'
const Item = ({ title, price, pictureUrl, stock, style, id }) => {
	const props = useSpring({
		to: { opacity: 1, translateX: 0 },
		from: { opacity: 0, translateX: 10 },
		config: { duration: 500 },
	})
	const { pathname } = useLocation()

	return (
		<animated.div style={props} className={`product__card ${style}`}>
			<div className="product__imgContainer">
				<Link to={stock ? `/item/${id}` : pathname} onClick={closeMenu}>
					<img className="product__img" src={pictureUrl} alt="" />
				</Link>
			</div>
			<div className="product_descriptionContainer">
				<p className="product__title">{title}</p>
				<p className="product__price">${price}</p>
			</div>
			<ItemCount stock={stock} initial={1} product={{ title, price, pictureUrl, stock, id }} />
			{!stock && <p className="product__noStock">SIN STOCK</p>}
		</animated.div>
	)
}

export default Item
