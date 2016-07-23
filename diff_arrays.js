//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
//In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2){
	var newArr = [];
	newArr = arr1.concat(arr2);

	function callback(element) {
		return (arr1.indexOf(element) === -1 || arr2.indexOf(element) === -1) ? element : false;
	}

	return newArr.filter(callback);
}