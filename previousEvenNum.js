function previousEven(num) {
	if (num % 2 === 0) {
		return num - 2;
	} else {
		return num - 1;
	}
}

console.log("previous even number of 5 is:", previousEven(5));
console.log("previous even number of 10 is:", previousEven(10));
console.log("previous even number of 127 is:", previousEven(127));
