function add(...args) {

	let i = 0;
	let sum = 0;

	while (i <= args.length - 1){

		sum = sum + args[i];
		i++;

	}
	return sum;
	// body...
}

module.exports = add;