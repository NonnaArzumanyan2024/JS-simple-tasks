function findMaxIndex(arr) {
	if (arr.length === 0) {
		return -1;
	}
	let maxIndex = 0;
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] > arr[maxIndex]) {
			maxIndex = i;
		}
	}
	return maxIndex;
}

	console.log(findMaxIndex([1, 2, 3, 4, 5])); //4
	console.log(findMaxIndex([-10, -1, -43, -5])); //1
	console.log(findMaxIndex([100])); //0
	console.log(findMaxIndex([])); //-1
