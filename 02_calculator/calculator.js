function createCalculator(){
	
		this.currentValue = 0;

		this.value = function(){
			return this.currentValue; 
		}

		this.add = function(x){
			this.currentValue +=x; 
		}

		this.subtract = function(x){
			this.currentValue += (x*(-1));
		}
	
	return this;
}

