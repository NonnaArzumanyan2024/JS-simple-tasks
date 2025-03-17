function factorialNum(num) {
	if (num <= 0) {
		return 1;
	}
	let result = 1;
	for (let i = 1; i <= num; ++i) {
		result *= i;
	}
	return result;
}

console.log("factorial of 5 is:", factorialNum(5));
console.log("factorial of 10 is:", factorialNum(10));
console.log("factorial of 15 is:", factorialNum(15));
