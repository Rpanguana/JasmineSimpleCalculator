function multiply(...args) {

	let i = 0;
	let product = 1;

	while (i <= args.length - 1){

		product *= args[i];
		i++;

	}
	return product;
}

module.exports = multiply;
console.log(multiply(3, 4));

