/**
 * Kings territory problem
 * 
 * Note: whenever variable is accessed directly without using
 *      let or var it will be by default declared as global 
 *      variable 
 * Whenever we use variable without let/var then it will replace value 
 * of variable having same name one step upper to this variable
 * */ 


let king = "Shivaji"

if (true) {
    
    let king = "Sambhaji"

    if (true) {
        
        king = "Udyanraje"

        console.log(king)
    }

    console.log(king)
}

function printKing() {
    var king = "akash"
    console.log(king)
}

printKing()

if (true) {
     console.log("Second child : " + king)
}