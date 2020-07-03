const todos = [{
    title: 'Learn PHP',
    isDone: true,
}, {
    title: 'Learn vue js',
    isDone: true,
}, {
    title: 'Learn javascript',
    isDone: false
}]

// Get things done
const thingsDone = todos.filter((todo)=> todo.isDone)

console.log(thingsDone)

const myNewTodos = [{
    title: 'Exercise in the morning',
    isDone: false
}, {
    title: 'Breakfast in the morning',
    isDone: true
}, {
    title: 'Record youtube video',
    isDone: true
}, {
    title: 'Read some pages of book',
    isDone: true
}, {
    title: 'Attend Interview',
    isDone: false
}]

// Get title of the not done things
let thingsNotDone = myNewTodos
                    .filter((todo) => !todo.isDone)
                    .map((todo) => todo.title)

console.log(thingsNotDone)
                        
