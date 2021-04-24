import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getItem from '../../helpers/getItem'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { itemId } = useParams()
	console.log(itemId)
	useEffect(() => {
		getItem(itemId)
        .then(res=>setProduct(res))
	}, [itemId])
	return (
		<>
			<ItemDetail {...product} />
		</>
	)
}

export default ItemDetailContainer
