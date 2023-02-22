
/* DATI
0.21€/Km tariffa base biglietto treno
-20% sconto under 18 anni
-40% sconto over 65
? = Calcola il costo del biglietto */

let myDistance = prompt("How many kilometers do you have to travel?");
let myAge = prompt("How old are you");

myDistance = Number(myDistance);
myAge = Number(myAge);


// Calculate the cost based on the distance and rate
let myCost = myDistance * 0.21;
myCost = Number(myCost);

if (myAge < 18) {
    myCost *= 0.8; // Apply a 20% discount for users under 18
  } else if (myAge >= 65) {
    myCost *= 0.6; // Apply a 40% discount for users 65 and over
}



// Display the cost to the user
const userTicket = document.getElementById("ticket-info");
userTicket.textContent = "Hello the cost of your ticket is " + myCost.toFixed(2) + "€.";

console.log("The cost for the ticket is " + myCost.toFixed(2) + "€.");
