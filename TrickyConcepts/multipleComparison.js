/**
 * We will get into detail how multiple comparison works tricky in javascript
 * 
 * 
 */

 // what do you think the output will be ?? --> True
 // But not, actual output will be false. Why?
 // It will compare two numbers at a time so 7 > 6 = true
 // It will now convert true to 1 so 1 > 5 = false
 console.log(7 > 6 > 5) 

 // This is not complicated scenario, it will return true
 // as per our first explaination also
 console.log(1 < 2 < 3)