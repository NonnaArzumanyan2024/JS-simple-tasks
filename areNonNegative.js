function areAllNonNegative(arr) {
	if (arr.length === 0) {
		return null;
	}
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] < 0) {
			return false;
		}
	}
	return true;
}

	console.log(areAllNonNegative([1, 2, 3, 4, 5])); //true
	console.log(areAllNonNegative([6, -10, 3])); //false
	console.log(areAllNonNegative([])); //null
