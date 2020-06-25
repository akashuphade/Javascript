
let superHeroes = ["Iron Man", "Superman", "Thor"]

console.log(superHeroes)

//Adds element at the end of the array
superHeroes.push("spiderman")

console.log(superHeroes)

//removes element from the end
superHeroes.pop()

console.log(superHeroes)

//removes first element and returns it
superHeroes.shift()

console.log(superHeroes)

//adds element at first
superHeroes.unshift("Iron Man")

console.log(superHeroes)

let marks = [25.5, 30.4, 55, 40]

//To reduce array to single element 
//like we have done sum of the elements
let sum = marks.reduce((a, b) => {
    a = Math.round(a)
    return a + b
})

console.log(sum)

let valid = [2, 5, 0, '']

//Filters the array based on condition and returns new array
let filter = valid.filter((a)=>{
    return a > 0
})

console.log(filter)

