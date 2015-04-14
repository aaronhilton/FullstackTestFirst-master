function factorialIterative(num){
	var result = 1;
	for (var i = 0; i<num; i++) {
		result *= (num-i); 
	}
	return result;
}

function factorial(num){
	if (num === 0)
		return 1; 
	else
		return (num*(factorial(num-1)));
}

function fib(num){
	if (num === 0)
		return 1;
	if (num === 1)
		return 1; 
	else 
		return (fib(num-1)+fib(num-2));
}

function type(obj){
	if(Object.prototype.toString.call(obj)==="[object Undefined]"){
		return "Undefined";
	}
	if(Object.prototype.toString.call(obj)==="[object Null]"){
		return "Null";
	}
	if(Object.prototype.toString.call(obj)==="[object Boolean]"){
		return "Boolean";
	}
	if(Object.prototype.toString.call(obj)==="[object Number]"){
		return "Number";
	}
	if(Object.prototype.toString.call(obj)==="[object String]"){
		return "String";
	}
	if(Object.prototype.toString.call(obj)==="[object Function]"){
		return "Function";
	}
	if(Object.prototype.toString.call(obj)==="[object Array]"){
		return "Array";
	}
	if(Object.prototype.toString.call(obj)==="[object Object]"){
		return "Object";
	}
}

function stringify(obj){
	var result = "";
	if ((type(obj) === "Object")){
		for (var i = 0; i < Object.keys(obj).length; i++) {
			obj[i] = stringify(obj[i]);
		}
	}
	else if (type(obj) === "Array"){
		for (var i = 0; i < obj.length; i++) {
			obj[i] = stringify(obj[i]);
		}
		return "["+obj.join(',')+"]";
	}
	else if (type(obj) === "String"){
		return "\""+String(obj)+"\""; 
	}
	else
		return String(obj);
}