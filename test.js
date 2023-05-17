const cart = {
	items: [],
	total: 0,
	addItem(item) {
		this.items.push(item)
		this.total += item.price
	},
}

const handler = {
	apply(target, thisArg, args) {
		console.log(`Called proxy as a function with arguments: ${args}`)
		return target.apply(thisArg, args)
	},
}

const cartProxy = new Proxy(cart.addItem, handler)

cartProxy({ name: 'Shirt', price: 20 }) // Called proxy as a function with arguments: [ { name: 'Shirt', price: 20 } ]
