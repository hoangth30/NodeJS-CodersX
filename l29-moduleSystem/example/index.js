var Mouse = require('./mouse')
var Cat = require('./cat');

var jerry = new Mouse('brown');
var mickey = new Mouse('black white');

var tom = new Cat()
tom.digest(jerry)
tom.digest(mickey);
console.log(tom);