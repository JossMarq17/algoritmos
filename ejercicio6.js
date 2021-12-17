/* Write a program where a user enters the number of tasks they have completed. The program returns one of the following labels to the console:
**Failed**
**Insufficient**
**Good**
**Excellent**
**Error**
based on the conditions:
Failed if they scored 6 or less
Insufficient if they scored > 6 but less than 9 (9 included)
Good if they scored > 9 but less than 14 (14 included)
Excellent if they scored 15
Error if participants enter a negative number or a number outside the range supported (outside 0 - 15) */

tasks=prompt('Write the number of tasks that you completed: ') 

function resultado(){ 
    if (tasks <= 6 && tasks >= 0){ 
        console.log("**Failed**"); 
    }else if (tasks > 6 && tasks <= 9){
        console.log("**Insufficient"); 
    }else if (tasks > 9 && tasks <= 14){ 
        console.log("**Good**"); 
    }else if (tasks == 15){ 
        console.log("**Excellent**"); 
    }else if (tasks > 15 || tasks < 0){
        console.log("**Error**"); 
    } 
    
}

    resultado();