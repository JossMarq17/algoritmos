// Open up a blank repl.it set to Javascript. Copy the code below into your workspace:
//Complete the function to print out the string This is a sentence.

var arr = ["This", "is", "a", "sentence."];
function printOutString() {
var result = '';
for(var i = 0; i < arr.length; i++){
result += arr[i] + ' ';
}
console.log(result);
}
printOutString()
