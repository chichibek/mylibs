String.prototype.toCapitalize = function(){
    var string = this.split(" "),
        len = string.length,
            arr = [],
            c,
            i = 0;
    
    if(len === 1){
        return this.charAt(0).toUpperCase() + this.substr(1,this.length);
    }else{
        for(;i < len; i++){
            c = string[i].charAt(0).toUpperCase() + string[i].substr(1,string[i].length);
            arr.push(c);
        }
        
        return arr.join(" ");
    }
}