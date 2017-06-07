module.exports = function reverseArr(arr) {
	for(let i = 0; i < arr.length/2; i++) {
		let temp = arr[arr.length-1-i];
		arr[arr.length-1-i] = arr[i];
		arr[i] = temp;
	}
	return arr;
} 