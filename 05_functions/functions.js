// Functions.js

function concat_string(){
	var result = "";
	for (var i=0; i<arguments.length; i++) {
		result += arguments[i];
	}
	return result; 
}

function yourFunctionRunner(){
	var result ="";
	for(var i=0; i<arguments.length; i++){
		result += arguments[i]();
	}
	return result;
}

var globalNum =0; 
function makeAdder(num){
	globalNum = num;
	return adderOf2function;
}

function adderOf2function(num){
	return globalNum + num; 
}

function once(funct){
	var hasRun = false; 
	function increment(){
		if(hasRun === false){
			funct();
			hasRun = true; 
		}
		else{}
	}
	return increment; 
}

function createObjectWithTwoClosures(){
	var result = 0; 
	var object = {};

	object.oneIncrementer = function(){
			result += 1; 
		}
	object.tensIncrementer = function(){
			result += 10; 
		}
	object.getValue = function(){
			return result; 
		}

	return object; 
}
