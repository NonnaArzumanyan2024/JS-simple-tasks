function findMax(arr) {
	if (arr.length === 0) {
		console.log("Array is empty");
		return null;
	}
	r0eturn arr.reduce((maxNum, current) => (current > maxNum ? current : maxNum), arr[0]);
}

	console.log(findMax([1, 2, 3, 4, 5])); //5
	console.log(findMax([-10, -1, -43, -5])); //-1
	console.log(findMax([100])); //100
	console.log(findMax([])); //empty
