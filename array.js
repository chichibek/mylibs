Array.prototype.max = function(){
    var max,
        len = this.length,
        i = 0;
    
    for(; i < len; i++){
        max = (!i) ? this[i] : (this[i] > max)  ? this[i] : max;
    }

    return max;
};

Array.prototype.min = function(){
    var min,
        len = this.length,
        i = 0;
    
    for(; i < len; i++){
        min = (!i) ? this[i] : (this[i] < min)  ? this[i] : min;
    }

    return min;
};

Array.prototype.indexOf = function(num){
    var len = this.length;

    while(len--){
        if(this[len] === num){
            return len;
        }
    }    

    return -1;
};

Array.prototype.avg = function(){
    var sum = 0,
        len = this.length,
        i   = 0;
    
    for(; i < len; i++){
        sum += this[i];
    }

    return sum/len;
};

Array.prototype.range = function(step){
    var len = this.length,
        f, 
        t, 
        arr = [], 
        step = step || 1;

    if(len === 2){
        if(this[0] < this[1]){
            f = this[0];
            t = this[1];
        }else{
            f = this[1];
            t = this[0];
        }
        
        for(var i = f; i <= t; i+=step){
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
	if(v){
		var arr = [],
            len = this.length,
            i = 0;

		for(; i < len; i++){
			if(this[i] !== v){
				arr.push(this[i]);
			}
		}
		
		return arr;
	}
};

Array.prototype.even = function() {
    var arr = [],
        len = this.length,
        i = 0;

    for(; i < len; i++){
        if(i % 2){
            arr.push(this[i]);
        }
    }

    return arr;
};

Array.prototype.odd = function() {
    var arr = [], 
        len = this.length, 
        i = 0;
    
    for(;i < len; i++){
        if(i % 2 === 0){
            arr.push(this[i]);
        }
    }
    
    return arr;
};