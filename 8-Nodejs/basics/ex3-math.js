const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

// module.exports.add = add;
//  module.exports.PI = PI;
// module.exports.square = square;

//////////////////////////////////////////////
const product = (x, y) => x * y;
const dif = (x, y) => x - y;

const operators = {
    product: product,
    dif: dif
}
module.exports = operators;   
