function Circle(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.isOverlapped = function(circle2){
    var d = Math.sqrt((Math.pow(this.x-circle2.x,2)+Math.pow(this.y-circle2.y,2)))
    console.log(d);
    if (d > (this.r+circle2.r)){
        return 1;
    } else if (d < (this.r+circle2.r)){
        return -1;
    } else return 0; 
}

module.exports = Circle;