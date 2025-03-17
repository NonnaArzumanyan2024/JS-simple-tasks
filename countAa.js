function countAa(str) {
	let count = 0;
	for (let i = 0; i < str.length; ++i) {
		if (str[i] === 'a' || str[i] === 'A') {
			++count;
		}
	}
	return count;
}

	console.log(countAa("Hello World!"));
	console.log(countAa("My name is Nonna"));
	console.log(countAa("I'm 33 years old"));
