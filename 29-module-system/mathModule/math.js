var total = 0;
var math = {
    add: function(a,b){
        return a + b;
    },
    multiply: function(c,d){
        return c * d ;
    },

    sum: function(arr){
        for(var i=0; i < arr.length; i++){
            total += arr[i];
        }
        return total;
    }
};

module.exports = math