import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import ItemList from './ItemList'
import Loading from './Loading'
import './styles/main.css'
import db from './../../firebase/firebase'
const ItemListContainer = () => {
	const history = useHistory()
	const { categoryId } = useParams()
	const [data, setData] = useState({ products: [], loading: true })
	const { products, loading } = data
	useEffect(() => {
		if (!categoryId) {
			const items = db.collection('items')
			items.get().then((snapShot) => {
				const allItems = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

				setData({ products: allItems, loading: false })
			})
		}
	}, [categoryId])

	useEffect(() => {
		setData({ loading: true })
		if (categoryId) {
			const categorieClean = categoryId.toLowerCase()
			const categories = db.collection('categories')

			categories
				.where('key', '==', categorieClean)
				.get()
				.then((snap) => {
					const [id] = snap.docs.map((doc) => doc.id)
					if (!id) {
						history.push('/404')
						return
					}

					const productsByCategorie = db.collection('items')

					productsByCategorie
						.where('categoryId', '==', id)
						.get()
						.then((snap) => {
							const allItems = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
							setData({ products: allItems, loading: false })
						})
				})
		}
	}, [categoryId, history])

	return <main className="main__container">{loading ? <Loading /> : <ItemList products={products} />}</main>
}

export default ItemListContainer
