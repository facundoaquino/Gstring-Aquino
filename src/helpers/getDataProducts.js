import products from '../data/products'

export const getDataProducts = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(products)
	}, 2000)
})
