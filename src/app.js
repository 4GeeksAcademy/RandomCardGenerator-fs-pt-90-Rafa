/* eslint-disable */
import "bootstrap";
import "./style.css";

const cardNumbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

const cardSuits = ["♦", "♥", "♠", "♣"];

function getRandomSuit() {
  return cardSuits[Math.floor(Math.random() * cardSuits.length)];
}

function getRandomNumber() {
  return cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
}

window.onload = function() {
  let suitDiv = document.getElementById("topsuit");
  let numberDiv = document.getElementById("number");
  let bottomsuitDiv = document.getElementById("bottomsuit");

  let suit = getRandomSuit();
  suitDiv.innerHTML = suit;
  suitDiv.classList.add(suit);
  bottomsuitDiv.innerHTML = suit;
  bottomsuitDiv.classList.add(suit);

  let number = getRandomNumber();
  numberDiv.innerHTML = number;
};
