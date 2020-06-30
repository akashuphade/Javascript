
/**
 * Freezing the object to restrict modification
 */

const myProfile = {
    name : 'Akash Uphade',
    age  : 27,
    designation : 'Software developer'
}

// Add properties to objects=
myProfile.salary = 60000
myProfile.location = 'Pune'

// Freeze object so it can't be modified anymore
// If object is freezed you can not add or modify
// it's properties
Object.freeze(myProfile)

// This won't work after freezing
myProfile.location = 'Latur'

console.log(myProfile)

/**
 * Seal the object to restrict only addition of new 
 * properties
 */
const myBio = {
    name : 'Akash Uphade',
    age  : 27,
    designation : 'Software developer'
}

Object.seal(myBio)

// Won't add new properties
myBio.salary = 70000

// Will allow modification to existing
myBio.designation = 'Senior software developer'
console.log(myBio)


/**
 * DefineProperty to make some properties readable
 */

 const mySpec = {
     name: "Akash Uphade",
 }

 Object.defineProperties(mySpec, {
     designation: {
         value: "Software engineer",
         writable: true
     }
 })

 console.log(mySpec.designation)
 console.log(mySpec)