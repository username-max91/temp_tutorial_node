const names = require('./4-names')
const sayHi = require('./3-utils')
const data = require('./6-alt')

console.log(names)
console.log(data)
//function invocation example without exports
require('./7-mind')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)