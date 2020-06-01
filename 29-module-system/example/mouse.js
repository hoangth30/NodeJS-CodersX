// Mouse Module

//constructor function for Mouse
function Mouse(color){
    this.color = color;
    this.dead = false;
}

Mouse.prototype.die = function(){
    this.dead = true;
}

module.exports = Mouse