let userEmail = 'Akas1234@gmail.com'
let password = '2343'

let userChecker = function(userName){
    if (userName.search(/[0-9]/g) === -1) {
        return false
    }
    if (userName.search(/[a-z]/ig) === -1) {
        return false
    }
    if (userName.search(/\@/) === -1) {
        return false
    }
    if (userName.length < 6) {
        return false
    }
    

    return true
}

if (!userChecker(userEmail)) {
    console.log(`Username doesn't pass validation`)
}

document.write("hello guys, how are you?")