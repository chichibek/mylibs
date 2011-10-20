Array.prototype.max = function(){
    var max;
    
    for(var i = 0, j = this.length; i < j; i++){
        max = (!i) ? this[i] : max = (this[i] > max)  ? this[i] : max;
    }

    return max;
}

Array.prototype.min = function(){
    var min;
    
    for(var i = 0, j = this.length; i < j; i++){
        min = (!i) ? this[i] : min = (this[i] < min)  ? this[i] : min;
    }

    return min;
}

Array.prototype.indexOf = function(num){
    for(var i = 0, j = this.length; i < j; i++){
        if(this[i] === num){
            return i;
        }
    }

    return -1;
}

Array.prototype.avg = function(){
    var sum = 0;
    
    for(var i = 0, len = this.length; i < len; i++){
        sum+=this[i];
    }

    return sum/this.length;
};

Array.prototype.range = function(step){
    var len = this.length, f, t, arr = [], step = step || 1;
    if(len === 2){
        if(this[0] < this[1]){
            f = this[0];
            t = this[1];
        }else{
            f = this[1];
            t = this[0];
        }
        
        for(var i = from; i <= to; i+=step){
            arr.push(i);
        }
        return arr;
    }else{
        return -1;
    }
};

Array.prototype.first = function(){
	return this[0];
};

Array.prototype.last = function(){
	return this[this.length - 1];
};

Array.prototype.withOut = function(v){
	if(v !== undefined){
		var arr = [];
		for(var i = 0, len = this.length; i < len; i++){
			if(this[i] !== v){
				arr.push(this[i]);
			}
		}
		
		return arr;
	}else{
		return undefined;	
	}
};

Array.prototype.even = function() {
    var arr = [];
    for(var i = 0, len = this.length; i < len; i++){
        if(i % 2){
            arr.push(this[i]);
        }
    }

    return arr;
};

Array.prototype.odd = function() {
    var arr = [];
    for(var i = 0, len = this.length; i < len; i++){
        if(i % 2 === 0){
            arr.push(this[i]);
        }
    }

    return arr;
};