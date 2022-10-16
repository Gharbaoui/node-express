// module is encapsulated code not the entire thing by the way
// every file is module by default

const add = (a, b) => {return a + b;} // shared
const sub = (a, b) => {return a + b;} // shared
const mult = (a, b) => {return a + b;} // shared
const divs = (a, b) => {return a + b;} // local


module.exports = {add, sub, mult}