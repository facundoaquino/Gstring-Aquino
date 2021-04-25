import React from 'react'

const Colors = ({ images ,setImage }) => {
	// console.log(images)
    
    const handlePicture = (url)=>{
        setImage(url)
    }
	return (
		<div className='detail__colorsContainer'>
			{images.map((img, i) => (
				<div onClick={()=>handlePicture(img.url)} key={i} className="detail__color" style={{ backgroundColor: img.color }}></div>
			))}
		</div>
	)
}

export default Colors
