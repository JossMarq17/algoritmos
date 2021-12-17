// We want to check if a string is empty. If a string is not empty, we want to print out the first character of that string. If a string is empty, print out a text saying "This string is empty"

function checkEmptyString(str) {
    if (str == ""){
    console.log("This string is empty")}
    else {console.log(str[0])}
    }
    // Example test, should return a
    checkEmptyString("apple");