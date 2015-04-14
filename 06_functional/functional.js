// 06_Functional 
function doubler(num){
	return 2*num; 
}

function map (array, func){
	var result = [array.length]; 
	for (var i = array.length - 1; i >= 0; i--) {
		result[i]= func(array[i]); 
	};
	return result; 
}

function filter(array, func){
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if(func(array[i]))
			result[i]=array[i];
	}
	for (var j = 0; j < result.length; j++) {
        if (result[j] === undefined) {         
            result.splice(j, 1);
             j--;
        }
    }
	return result;
}


function contains(arr, num) {
	for (key in arr) {
		if (arr[key] === num) return true;
	}
	return false;
};

function countWords(word){
	var strArray = word.split(' ');
	//return 'this is a sentence with ' + strArray.length + ' words';
	return strArray.length;
}


function reduce(arr, start, func) {
	var total = start;
	arr.forEach(function(element) {
		total = func(element, total);
	})
	return total;
};

function countWordsInReduce(wordsArr, start) {
	return countWords(wordsArr) + start;
};

function sum(array){
	return reduce(array, 0, function(num1, num2){
		return num1+num2;
	});
}

function every(array, func) {
	var result = true;
	for (var i = 0, l = array.length; i < l; i++) {
		result = func(array[i]);
		if (!func(array[i])) break;
	}
	return result;
};

function any(array, func) {
	var result = false;
	var func = func || function(element) { return element; };
	for (var i = 0, l = array.length; i < l; i++) {
		if (func(array[i])) {
			result = true;
			break
		}
	}
	return result;
};
