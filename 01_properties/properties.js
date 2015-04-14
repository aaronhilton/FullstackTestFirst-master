function setPropertiesOnObjLiteral(object){
	object.x = 7;
	object.y = 8;
	object.onePlus = function(x){
		return x+1; 		
	}
}

function setPropertiesOnArrayObj(arrayObject){
	arrayObject.hello = function(){
		return "Hello!";
	}
	arrayObject.full = "stack";
	arrayObject[0]=5;
	arrayObject.twoTimes = function(x){
		return x*2; 
	}
}

function setPropertiesOnFunctionObj(functionObject){
	functionObject();
	functionObject.year = 2015;
	functionObject.divideByTwo = function(x){
		return x/2; 
	}
	functionObject.prototype.helloWorld = function(){
		return "Hello World";
	}
}