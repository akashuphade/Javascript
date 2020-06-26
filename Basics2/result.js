const calculateGrade = function(marksObtained, totalMarks = 100) {


    //validate the parameters
    if (typeof marksObtained !== "number") {
        return "Invalid marks provided"    
    }

    if (typeof totalMarks !== "number") {
        return "Invalid total marks provided"
    }

    let percentage = (marksObtained / totalMarks) * 100
    let grade = ''

    if (percentage >= 90) {
        grade = 'A'    
    } else if (percentage >= 80) {
        grade = 'B'
    } else if (percentage >= 70) {
        grade = 'C'
    } else if (percentage >= 60) {
        grade = 'D'
    } else if (percentage >= 50) {
        grade = 'E'
    } else {
        grade = 'F'
    }

    return `Your grade is : ${grade} and percentage is : ${percentage}`
}

console.log(calculateGrade(467, 500))