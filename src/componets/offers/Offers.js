import React from 'react'
import ahora12 from './../../assets/images/ahora12.png'
import './styles.css'

const Offers = () => {
	return (
		<div className="offers__container">
			<div className="offer__container">
				<div className="offers__imgContainer">
					<img src={ahora12} alt="" />
				</div>
				<p className="offers__description">Trabajamos con todos los medios de pago</p>
			</div>
			<div className="offer__container">
				<div className="offers__imgContainer">
					<i className="fas fa-truck offers__truck"></i>
				</div>
				<p className="offers__description">Envios a todo el pais</p>
			</div>
		</div>
	)
}

export default Offers
