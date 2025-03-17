function hasNegative(arr) {
	if (arr.length === 0) {
		return null;
	}
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] < 0) {
			return true;
		}
	}
	return false;
}

	console.log(hasNegative([1, 2, 3, 4, 5])); //false
	console.log(hasNegative([10, 20, -30])); //true
	console.log(hasNegative([-33])); //true
	console.log(hasNegative([])); //null
