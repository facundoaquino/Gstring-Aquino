import React from 'react'
import handleActualColor from '../../helpers/handleActualColor'

const Colors = ({ images, setImage }) => {
	const handlePicture = (url) => {
		setImage(url)
	}

	return (
		<div className="detail__colorsContainer">
			<h4 className="detail__subtitle">Colores Disponibles</h4>
			{images.map((img, i) => (
				<div
					onClick={(e) => {
						handlePicture(img.url)
						handleActualColor(e)
					}}
					key={i}
					className={`detail__color  ${!i && 'active__color'} `}
					style={{ backgroundColor: img.color }}
				></div>
			))}
		</div>
	)
}

export default Colors
