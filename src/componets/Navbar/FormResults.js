import React from 'react'
import { Link } from 'react-router-dom'
import './formResults.css'

const FormResults = ({ results, showResults, setValue }) => {
	return (
		<div className="results__container">
			{results.map((result, inx) => (
				<Link
					onClick={() => {
						showResults()
						setValue('')
					}}
					key={inx}
					to={`/item/${result.id}`}
				>
					<p className="results__title">{result.title}</p>
				</Link>
			))}
		</div>
	)
}

export default FormResults
