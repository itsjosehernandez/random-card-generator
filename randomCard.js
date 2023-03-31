const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const simbolo = ["♦", "♥", "♠", "♣"];
const cardContainer = document.getElementById("card-container");


function randomElement(array){

  return array[Math.floor(Math.random() * array.length)];
}

function createRandomCard() {

let card = document.createElement("div");

card.style.padding = "50px";
card.style.borderRadius = "10px";
card.style.border = "1px solid black";
card.style.height = "400px";
card.style.width = "300px";
card.style.backgroundColor = "white";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.justifyContent = "space-between";

let randomPinta = randomElement(simbolo);
let randomValue = randomElement(cardValues);

let color = "black";

if (randomPinta === "♦" || randomPinta === "♥"){
color = "red";
}



let cardUp = document.createElement("h4");
cardUp.style.color = color;
cardUp.innerHTML = randomPinta;




let cardValue = document.createElement("h4");
cardValue.style.display = "flex";
cardValue.style.justifyContent = "center";
cardValue.style.color = color;
cardValue.innerHTML = randomValue;


let cardDown = document.createElement("h4")
cardDown.style.transform = "rotate(180deg)";
cardDown.style.color = color;
cardDown.innerHTML = randomPinta;


card.appendChild(cardUp);
card.appendChild(cardValue);
card.appendChild(cardDown);

cardContainer.appendChild(card);
}

window.onload = createRandomCard();