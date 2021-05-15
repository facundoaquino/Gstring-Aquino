import React, { useState } from 'react'
import products from '../../data/products'
import FormResults from './FormResults'

const SearchForm = () => {
	const [search, setSearch] = useState([])
	const [showResults, setShowResults] = useState(true)
	const [value, setValue] = useState('')
	const handleSearch = (e) => {
		const value = e.target.value.trim()
		setValue(value)
		const productsFounded = products
			.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()))
			.map((p) => ({ title: p.title, id: p.id }))
		productsFounded.length = 5
		setShowResults(true)
		setSearch(productsFounded)

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
