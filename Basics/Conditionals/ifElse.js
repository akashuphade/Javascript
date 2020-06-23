//Get student marks
console.log("Welcome to Grading system")

let response = 50

//Check the type of user input
if (typeof response !== "number") {
    console.log("Invalid marks provided..")
}

//Show grade based on marks
if (response >= 90) {
    console.log("Your Grade: A++")
} else if (response >= 80) {
    console.log("Your Grade: A+")
} else if (response >= 70) {
    console.log("Your Grade: A")
} else if (response >= 60) {
    console.log("Your Grade: B++")
} else if (response >= 50) {
    console.log("Your Grade: B+")
} else if (response >= 40) {
    console.log("Your Grade: B")
} else if (response >= 30) {
    console.log("Your Grade: C++")
} else if (response >= 20) {
    console.log("Your Grade: C+")
} else if (response >= 10) {
    console.log("Your Grade: C")
} else {
    console.log("Your Grade: D")
}
