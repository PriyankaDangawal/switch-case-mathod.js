const readlineSync = require('readline-sync');
var num= readlineSync.questionInt("enter the number: ");
switch(num){
    case 1:
        console.log("sunday");
    break;
    case 2:
        console.log("monday");
    break;
    default:
        console.log("wrong")
}

// A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Ask user to enter marks and print the corresponding grade.

const readline = require("readline-sync");
var marks= readline.questionInt("please enter marks: ");
switch(true){
    case (marks<25):
        console.log("grade F");
    break;
    case (marks>=25 && marks<45):
        console.log("grade E");

    break;
    case (marks>=45 && marks<50):
        console.log("grade D");

    
    break;
    case (marks>=50 && marks<60):
        console.log("grade c")

    break;
    case (marks>=60 && marks<80):
        console.log("grade B");

    break;
    case (marks>80):
        console.log("grade A")

    break;
    default:
        console.log("no grade");
}
