let john = {
    name: 'I am john',
    age: 24,
    isActive: true
}

let marry = {
    name: 'I am marry',
    age: 23,
    isActive: true
}

let sam = {
    name: 'I am sam',
    age: 29,
    isActive: false
}

let users = new Map()

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

for (const [key, value] of users.entries()) {
    console.log(`${key} = ${value.name}`)
}
