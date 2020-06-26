const myTodos = []

myTodos.push("Learn laravel and vuejs")
myTodos.push("Learn javascript")
myTodos.push("Learn PHP concepts")

myTodos.forEach(function(todo, index) {
    console.log(`Your task no ${index + 1} is : ${todo}`)
})

myTodos.unshift("Do exercise")
myTodos.unshift("Have breakfast")

for (let index = 0; index < myTodos.length; index++) {
    console.log(`Your task no ${index + 1} is : ${myTodos[index]}`)
}