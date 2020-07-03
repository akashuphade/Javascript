let obj1 = {}
let obj2 = {}

// In case of objects when we are creating two exactly same 
// objects. two objects are never equal even if with same data
console.log(obj1 == obj2) // returns false

// == -> it only checks for values equality. It tries to convert
// right hand side operand in the type of the left hand side operand
// === -> it does not try to convert the operands. It checks for 
// both value as well as type of the operands
console.log(2  === "2.00")



