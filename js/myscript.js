
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
let cost = myDistance * 0.21;

if (Myage < 18) {
    cost *= 0.8; // Apply a 20% discount for users under 18
  } else if (age >= 65) {
    cost *= 0.6; // Apply a 40% discount for users 65 and over
}

// Display the cost to the user
console.log("The cost for the ticket is" + cost + " €.");
