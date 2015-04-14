function Mammal(name){
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function(){
		return "My name is "+this.name+", I'm a Mammal";
	}
//comment
Mammal.prototype.haveBaby = function(){
	var babyName = "Baby "+this.name;
	var baby = new Mammal(babyName);
	this.offspring.push(baby);
	return baby; 
}

function Cat(name, color){
	Mammal.call(this, name);
	this.color=color; 
}

Cat.prototype = Object.create(Mammal.prototype) // Sets the Cat prototype object equal to the Mammal prototype
Cat.prototype.haveBaby = function(color){
	var catBaby = Mammal.prototype.haveBaby.call(this); // Calls the haveBaby function from the Mammal prototype & sets the result to catBaby
	catBaby.color = color; // add the color property that was passed in as an argument to catBaby
	return catBaby;
}

Cat.prototype.constructor = Cat; 