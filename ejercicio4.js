// We want to compare two strings and check if they are the same - case insensitive. Return a boolean - true if the two strings are the same, and false if they are not.

function checkTwoStringsSame(str1, str2) {
    if (str1.toLowerCase == str2.toLowerCase){
        console.log("True")}
    else {console.log("False")}
    }
    // Example test, should return true
    checkTwoStringsSame("String1", "string1");