 
import products from '../data/products'

const getItem = (itemId) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const product = products.find((pro) => pro.id === itemId)
			// console.log(product)
			resolve(product)
		}, 2000)
	})
}

export default getItem
