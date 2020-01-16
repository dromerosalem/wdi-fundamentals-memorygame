
const cards = [
{
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png",
},

{
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png",
},

{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png",
},

{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
}

];

let cardsInPlay = [];

function checkForMatch() {	
	
	if (cardsInPlay[0] === cardsInPlay[1]){
	alert('You found a match');
	let gameScore = Number(document.getElementById('score').innerHTML);
	gameScore += 1;
	document.getElementById('score').innerHTML = Number(gameScore);
}
    else if (cardsInPlay[0] !== cardsInPlay[1]){
	alert('Sorry, try again');

}
setTimeout(flipCard, 1000)
}


function flipCard () {
cardID = this.getAttribute('data-id');
this.setAttribute('src', cards[cardID].cardImage);
console.log('User Flipped' + ' ' + cards[cardID].rank);
cardsInPlay.push(cards[cardID].rank);
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);

if (cardsInPlay.length === 2){
checkForMatch();
}

}

function createBoard (){
	
/*let arr = cards;
	 for (let i = arr.length-1; i > 0; i--) {
  	 	const j = Math.floor(Math.random() * i)
  	 	const temp = arr[i]
  	 	arr[i] = arr[j]
  	 	arr[j] = temp
	 }*/

	for (let i = 0; i < cards.length; i++){
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();


function again(){
cardsInPlay.length = 0;
document.getElementById('game-board').innerHTML = '';
createBoard();

}
	

document.getElementById('startAgain').addEventListener('click', again);




