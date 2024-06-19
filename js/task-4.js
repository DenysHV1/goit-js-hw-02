function getShippingCost(country){

	let price = 0;
	let message = '';

	switch (country) {
		case "Australia":
			price = 170;
		message = `Shipping to ${country} will cost ${price} credits`;
		return message;

		case "China":
			price = 100;
			message = `Shipping to ${country} will cost ${price} credits`;
			return message;

		case "Chile":
			price = 250;
			message = `Shipping to ${country} will cost ${price} credits`;
			return message;

		case "Jamaica":
			price = 120;
			message = `Shipping to ${country} will cost ${price} credits`;
			return message;

		default:
		return "Sorry, there is no delivery to your country"
	}
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
