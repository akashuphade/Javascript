/**
 * let - scope of let is block level
 * var - scope of var is function level
 * Note: if let/var defined globally then both works same
 */

// Declared at top so let and var both behaves same
let iAmGlobal = "Global"
var secondGlobal = "second"

if (true) {
    // It is defined inside block
    // scope is block level
    let iAmLocal = "Local"
    
    // Even if var is defined inside block
    // still it will be available outside block
    // due to its scope
    var anotherGlobal = "another global"

    console.log(iAmGlobal)
    console.log(secondGlobal)
    console.log(iAmLocal)
}

function greet(name) {

    // Even if var is declared inside function 
    // as it's scope is function level so 
    // it is just accessible inside the function
    var greeting = "Hello "
    console.log(greet + name)
}

// console.log(iAmLocal)    //variable defined inside blocks using let can not be accessed outside block
greet("Akash")
// console.log(greeting)