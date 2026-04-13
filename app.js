"use strict";

console.log("App starter...");

// Finder mine knapper
const clickBtn = document.querySelector("#click-button");
const countDisplay = document.querySelector("#counter");
const resetBtn = document.querySelector("#reset-button");

//Tester at de er fundet
console.log(clickBtn);
console.log(countDisplay);
console.log(resetBtn);

// Laver tæller-variablen
let count = 0;

// Eventlistener der får klik til at tælle op
clickBtn.addEventListener("click", function() {
    count = count + 1;
    countDisplay.textContent = count;
    console.log(count);
    if (count === 10) {
        alert("Du har klikket 10 gange");
    }
})

// Eventlistener til nulstille-knappen
resetBtn.addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = count;
    console.log(count);
    if (count = 0) {countDisplay.style.color = "lightgreen";
        
    }
})

// Tæl ned
const minusBtn = document.querySelector("#minus-button");
console.log(minusBtn);

minusBtn.addEventListener("click", function() {
    count = count - 1;
    countDisplay.textContent = count;
    console.log(count);

})

