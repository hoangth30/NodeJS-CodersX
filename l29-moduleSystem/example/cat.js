// Cat module
// constructor function for Cat

function Cat(){
    this.stomach = [];
}

Cat.prototype.digest = function(mouse){
    this.stomach.push(mouse);
    mouse.die();
}

module.exports = Cat;