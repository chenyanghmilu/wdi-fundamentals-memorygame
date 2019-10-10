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
{   rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
};
function filpCard(cardId) {
	var cardId = this.getAttribute('data-id');
console.log("User flipped" + " " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
this.setAttribute('src', cards[cardId].cardImage);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
if (cardsInPlay.length===2) {
checkForMatch();
}
};
function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);	
		cardElement.addEventListener('click', filpCard);
	}
};
createBoard();