function RPNCalculator(){
	this.stack = [];
}

RPNCalculator.prototype.push = function(num){
	this.stack.push(num); 
}

RPNCalculator.prototype.plus = function(){
	if(typeof this.stack != "undefined" && this.stack !== null && this.stack.length > 0){
		var i = (this.stack.pop() + this.stack.pop());
		this.stack.push(i);
	} else {
		throw "rpnCalculator is empty";
	}
}

RPNCalculator.prototype.minus = function(){
	if(typeof this.stack != "undefined" && this.stack !== null && this.stack.length > 0){
		var i = this.stack.pop();
		var j = this.stack.pop();
		var result = j-i; 
		this.stack.push(result);
	} else {
		throw "rpnCalculator is empty";
	}
}

RPNCalculator.prototype.divide = function(){
	if(typeof this.stack != "undefined" && this.stack !== null && this.stack.length > 0){
		var i = this.stack.pop();
		var j = this.stack.pop();
		var result = j/i; 
		this.stack.push(result);
	} else {
		throw "rpnCalculator is empty";
	}
}

RPNCalculator.prototype.times = function(){
	if(typeof this.stack != "undefined" && this.stack !== null && this.stack.length > 0){
		var i = this.stack.pop() * this.stack.pop();
		this.stack.push(i);
	} else {
		throw "rpnCalculator is empty";
	}
}

RPNCalculator.prototype.value = function(){
    var temp = this.stack.pop();
    this.stack.push(temp);
	return temp; 
}