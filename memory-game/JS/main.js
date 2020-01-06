
let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

function checkForMatch() {	
	
	if (cardsInPlay[0] === cardsInPlay[1]){
	alert('You found a match');
}
    else if (cardsInPlay[0] !== cardsInPlay[1]){
	alert('Sorry, try again');
}
}

function flipCard (cardID) {

if (cardsInPlay.length === 2){
checkForMatch();
}

console.log('User Flipped' + ' ' + cards[cardID]);
cardsInPlay.push(cards[cardID]);
}
flipCard(0);
flipCard(2);



