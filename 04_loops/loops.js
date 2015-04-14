function repeat(input, num){
	var result = "";
	for(var x=0; x<num; x++ ){
		result+=input; 
	}
	return result;
}

function sum(array){
	var result =0;
	for (var i = array.length - 1; i >= 0; i--) {
		result += array[i];
	};
	return result; 
}

function gridGenerator(num){
	var result = "";

	for (var i = 0; i < num; i++) {
		if((i%2) === 0){
			for(var j =0; j<num; j++){
				if((j%2) === 0)
					result+= "#"
				if((j%2) !== 0)
					result+= " "
			}
			result+="\n";
		}
		if((i%2) !== 0){
			for(var j =0; j<num; j++){
				if((j%2) === 0)
					result+= " "
				if((j%2) !== 0)
					result+= "#"
			}
			result+="\n";
		}
	}
	return result;
}

function largestTriplet(num){
	var resultArray = new Array(3);	
	resultArray[0]=0;
	resultArray[1]=0;
	resultArray[2]=0;
	
	for(var i=1; i<=num; i++){
	    for(var j =1; j<num; j++){
	        for(var k=1; k<num; k++){
	            if(((k*k)+(j*j)) == (i*i)){
	                resultArray[1]=j;
	                 resultArray[0]=k;
	              resultArray[2]=i;
	             }
	            
	      }
	    }
	}
	return resultArray;
}

function join(array, deliniator){
	result="";
	if(array.length === 0){
		return result;
	}
	for (var i = array.length - 1; i >= 0; i--) {
		array[i] = String(array[i]);
	}
	if(deliniator)
		result = array.join(deliniator);
	else
		result =array.join("");
	return result;
}

function paramify(arg){
	var result = "";
	var count =0;
	var tempArray=[];
	for (var key in arg) {
		if(arg.hasOwnProperty(key)){
			tempArray.push(key+"="+arg[key]);
		}
		
	}
	tempArray.sort(
		function(a, b) {
			return a.toLowerCase().localeCompare( b.toLowerCase() );
		}
	);
	console.log(tempArray);
    for(var obj in tempArray){
        if(count>0)
	    	result += "&";
	    result += tempArray[obj];
	    count++;
    }
	return result; 
}

