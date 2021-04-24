import products from '../data/products'

export const getDataProducts =(category )=>{
	let response = products
	if(category){
		response = products.filter(product=>product.category===category)
		 
	}

	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		  resolve(response)
	  }, 2000)
  })
}
