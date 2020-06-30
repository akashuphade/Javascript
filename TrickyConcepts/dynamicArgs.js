
/**
 * Here we will learn how to access arguments dynamically inside the function
 */

 function addNumbers()
 {
    // By default arguments is an object, you will need to convert it
    // to array to get the sum of it

    let numbers = Object.values(arguments)

    let sum = numbers.reduce(function(a, b) {
         return a + b
     })

    console.log(`Sum of numbers is : ${sum}`)
 }

 addNumbers(4, 5, 15)