import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Loading from '../container/Loading'
import ItemDetail from './ItemDetail'
import db from './../../firebase/firebase'
import NotFound from '../notFounded/NotFound'
const ItemDetailContainer = () => {
	const [data, setProduct] = useState({ product: [], loading: true })
	const { product, loading } = data
	const { itemId } = useParams()

	useEffect(() => {
		setProduct({ loading: true })
		const itemsCollection = db.collection('items')
		const item = itemsCollection.doc(itemId)
		item.get().then((product) => {
			if (!product.exists) {
				setProduct({ product: null, loading: false })
				return
			}
			const productGet = { id: product.id, ...product.data() }

			setProduct({ product: productGet, loading: false })
		})
	}, [itemId])
	return (
		<>
			{loading ? (
				<Loading product="producto" />
			) : product ? (
				<ItemDetail {...product} />
			) : (
				<NotFound description="Producto no encontrado" />
			)}
		</>
	)
}

export default ItemDetailContainer
