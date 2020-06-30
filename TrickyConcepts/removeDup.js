let arr = [1, 3, 4, 5, 3, 2, 1]

// To remove duplicates from array we can 
// pass them to set function which will remove
// duplicate elements

// There are two ways to convert set/object to array
// First is: spread operator
arr = [...(new Set(arr))]

// Second is Array.from function
arr = Array.from(new Set(arr))

console.log(arr)