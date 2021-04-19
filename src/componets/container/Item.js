import React from 'react'

const Item = ({title,description,price,pictureUrl}) => {
    console.log(title);
    return (
        <div className='product__card'>
            <img className='product__img' src={pictureUrl} alt=""/>
            <p>{title}</p>
            <p>${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default Item
