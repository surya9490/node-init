const names = require('./module');
const sayHi = require('./utility');

console.log(__dirname);



sayHi("susan");
sayHi(names.john);
sayHi(names.peter);