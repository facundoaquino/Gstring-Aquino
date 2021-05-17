import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'
const NotFound = ({ description }) => {
	return (
		<div className="notfound__container">
			<h2>{description}</h2>
			<Link to="/">
				<button>Volver</button>
			</Link>
		</div>
	)
}

export default NotFound
