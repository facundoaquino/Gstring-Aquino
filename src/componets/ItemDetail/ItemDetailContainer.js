import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getItem from '../../helpers/getItem'
import Loading from '../container/Loading'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
	const [data, setProduct] = useState({ product: [], loading: true })
	const { product, loading } = data
	const { itemId } = useParams()
	// console.log(itemId)
	useEffect(() => {
		setProduct({ loading: true })
		getItem(itemId).then((res) => setProduct({ product: res, loading: false }))
	}, [itemId])
	return <>{loading ? <Loading product="producto" /> : <ItemDetail {...product} />}</>
}

export default ItemDetailContainer
