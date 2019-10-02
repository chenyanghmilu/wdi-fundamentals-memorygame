var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardsTwo = cards[3];
var cardsInPlay = [];
cardsInPlay.push("cardOne");
cardsInPlay.push("cardsTwo");
if (cardsInPlay[0] === cardsInPlay[3]){
	alert("You found a match!");
} else {
	alert("Sorry try again!");
}
cardsInPlay;
console.log("User flipped queen");
console.log("User flipped king");