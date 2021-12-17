/*Open a repl.it Javascript page and call it Algorithms Introduction Exercise 3.
We have 3 items and we know the price for each. However, we can only buy the two least expensive items.
Write an algorithm that takes in three user inputs and outputs the two smallest prices to the console.*/

cost1 = parseInt(prompt("Escribe el precio 1: ")); 
cost2 = parseInt(prompt("Escribe el precio 2: ")); 
cost3 = parseInt(prompt("Escribe el precio 3: ")); 

function costos(){ 
    if (cost1 > cost2 && cost1 > cost3){
        console.log("Los precios bajos son: " + cost2 + ", " + cost3); 
    }if (cost2 > cost1 && cost2 > cost3){
        console.log("Los precios bajos son: " + cost1 + ", " + cost3); 
    }if (cost3 > cost1 && cost3 > cost2){
        console.log("Los precios bajos son: " + cost1 + ", " + cost2); 
    } 
    }
        
    
    costos();