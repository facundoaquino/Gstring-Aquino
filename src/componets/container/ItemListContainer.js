import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getDataProducts } from '../../helpers/getDataProducts'
import ItemList from './ItemList'
import Loading from './Loading'
import './styles/main.css'
import db from './../../firebase/firebase'
const ItemListContainer = () => {
	const { categoryId } = useParams()
	const [data, setData] = useState({ products: [], loading: true })
	const { products, loading } = data
	useEffect(() => {
		const items = db.collection('items')
		items.get().then((snapShot) => {
			const allItems = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
			console.log(allItems)
			setData({ products: allItems, loading: false })
		})
		// getDataProducts().then((res) => setData({ products: res, loading: false }))
	}, [])

	// useEffect(() => {
	// 	setData({ loading: true })
	// 	getDataProducts(categoryId).then((res) => setData({ products: res, loading: false }))
	// }, [categoryId])

	return <main className="main__container">{loading ? <Loading /> : <ItemList products={products} />}</main>
}

export default ItemListContainer
