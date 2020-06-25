/**
 * There are two ways we can define our functions
 * 1. store function definition in a variable without having function name
 * 2. without storing it in variable with function name
 */

/**
 * It will return sum of two numbers
 * @param {int} num1 
 * @param {int} num2 
 */
let adder = function(num1, num2) {
    return num1 + num2
}

console.log(adder(5, 8))

function fullName(firstname, lastname) {
    return `${firstname} ${lastname}`
}

console.log(fullName('Akash', 'Uphade'))