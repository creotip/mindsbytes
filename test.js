const isFibonacci = (num) => {
	let a = 0
	let b = 1
	let nextFib = 1

	if (num === 0 || num === 1) {
		return true
	}

	while (num >= b) {
		a = b
		b = nextFib
		nextFib = a + b
		if (num === b) {
			return true
		}
	}

	return false
}

console.log(isFibonacci(21)) // true
