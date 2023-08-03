const _ = require('lodash')

const items = [1,[2,[3]]]
const newItem = _.flattenDeep(items);
console.log(newItem);