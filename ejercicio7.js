/*Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
Write an algorithm to find the largest among 5 different numbers entered by the user.
Print out the largest number to the console. */

num1 = parseInt(prompt("Escribe el número 1: ")); 
num2 = parseInt(prompt("Escribe el número 2: ")); 
num3 = parseInt(prompt("Escribe el número 3: ")); 
num4 = parseInt(prompt("Escribe el número 4: ")); 
num5 = parseInt(prompt("Escribe el número 5: ")); 

function compara(){ 
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){ 
        console.log("El número " + num1 + " es el mayor"); 
    }if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){ 
        console.log("El número " + num2 + " es el mayor");
    }if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
        console.log("El número " + num3 + " es el mayor"); 
    }if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){ 
        console.log("El número " + num4 + " es el mayor"); 
    }if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){ 
        console.log("El número " + num5 + " es el mayor"); 
    } 

} 

compara();