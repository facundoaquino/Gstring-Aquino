import React from 'react'
import './banner.css'

import background from './../../assets/images/background.jpg'
const Banner = () => {
	return (
		<div className="banner__container">
			<div className="banner__imgContainer">
				<img src={background} alt="guitar-presentation" />
				<div className="banner__descriptionCotainer">
					<h2 className="banner__title">40% OFF</h2>
					<p className="banner__text">En guitarras Fender</p>
					<button className="banner__button">Más info</button>
				</div>
			</div>
		</div>
	)
}

export default Banner
