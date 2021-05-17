import React, { useState } from 'react'

import FormResults from './FormResults'
import db from './../../firebase/firebase'
const SearchForm = () => {
	const [search, setSearch] = useState([])
	const [showResults, setShowResults] = useState(true)
	const [value, setValue] = useState('')
	const itemsCollections = db.collection('items')
	const handleSearch = (e) => {
		const value = e.target.value.trim()
		setValue(value)
		if (value.length >= 2) {
			itemsCollections.get().then((docs) => {
				const items = []
				docs.docs.forEach((product) => {
					if (product.data().title.toLowerCase().includes(value.toLowerCase())) {
						items.push({
							id: product.id,
							title: product.data().title,
						})
					}
				})
				items.length = 5

				setShowResults(true)
				setSearch(items)
			})
		}

		if (!value) {
			setSearch([])
		}
	}

	const handleShow = (e) => {
		// e.stopPropagation()
		setTimeout(() => {
			setShowResults(false)
		}, 200)
	}

	return (
		<form onSubmit={(e) => e.preventDefault()} className="navbar__form navbar--none">
			<input
				onChange={handleSearch}
				onBlur={handleShow}
				className="navbar__search"
				placeholder="Buscar"
				type="text"
				value={value}
			/>
			<i className="fas fa-search  navbar__icon-search"></i>
			{showResults && <FormResults setValue={setValue} showResults={handleShow} results={search} />}
		</form>
	)
}

export default SearchForm
