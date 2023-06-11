function isValidTaxId(taxId: string): boolean {
	if (isEmpty(taxId)) return false

	let length = taxId.length
	let isValid = false
	let sum = 0
	let parity = length % 2

	if (length === 8 || length === 9 || length === 10) {
		for (let i = 0; i < length; i++) {
			let digit = parseInt(taxId.charAt(i))
			if (i % 2 !== parity) {
				sum = sum + digit
			} else if (digit > 4) {
				sum = sum + 2 * digit - 9
			} else {
				sum = sum + 2 * digit
			}
		}
		isValid = sum % 10 === 0
	}

	return isValid
}

function isEmpty(text: string): boolean {
	return !text.trim()
}

console.log(isValidTaxId('01025121')) // 8
console.log(isValidTaxId('310873377')) // 9
console.log(isValidTaxId('314060922')) // 9
console.log(isValidTaxId('3895605552')) // 10
