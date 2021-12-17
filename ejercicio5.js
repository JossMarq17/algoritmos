/* * Create a function that takes in 2 inputs (using prompt) and goes through the 5 arithmetic operators (+, -, /, *, %). The expected output on the console is:
* `The sum is x` -> x is the calculated sum
* `The subtraction is y` -> y is the calculated difference
* `The multiplication is z` -> z is the calculated multiplication
* `The division is w` -> w is the calculated division
* `The remainder is q` -> q is the calculated remainder */

function mathematicOperations() { 
    num1 = parseInt(prompt("Escribe un número: "),10); 
    num2 = parseInt(prompt("Escribe otro número: "),10);

    console.log("The sum is x = " + (num1+num2)); 
    console.log("The subtraction is y = " + (num1-num2)); 
    console.log("The multiplication is z = " + (num1*num2)); 
    console.log("The division is w = " + (num1/num2)); 
    console.log("The remainder is q = " + (num1%num2)); 
} 

mathematicOperations();