var cards = [
{
	rank: "queen",
	suit: "heart",
	cardImage: "images/queen-of-hearts.png"
}, 
{   rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}, 
{
    rank: "king",
	suit: "heart",
	cardImage: "images/king-of-hearts.png"
},  
{   rank: "queen",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};
function filpCard(cardId) {
console.log("User flipped" + " " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

checkForMatch();
};
filpCard(0);
filpCard(2);
