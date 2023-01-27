alert (`It's time for WAR!`);
let suit = ['spades', 'diamonds', 'hearts', 'clubs'];
let values = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
let deck = [];


class Deck{
    constructor(cards){
        this.cards =[];
    }
}
class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }   
}
    for (suitCounter = 0; suitCounter < 4; suitCounter++){
                for (valueCounter = 0; valueCounter < 13; valueCounter++){
                    deck.push(values[valueCounter] + " of " + suit[suitCounter]);
                }
            }       

shuffle(deck);

function shuffle (array){
    var shuffledArray = [];
    let usedIndexes = [];

for(let i = 0; i < array.length;i++){
    let randomNumber = Math.floor(Math.random() * array.length);
    if(!usedIndexes.includes(randomNumber[i])){
        shuffledArray.push(array[randomNumber]);
        usedIndexes.push(randomNumber);     
    }
}
   let player1cards = (shuffledArray.slice(0,26));
   let player2cards = (shuffledArray.slice(26,52));
   console.log (player1cards);
   console.log (player2cards);



class Player{
    constructor(players,points){
        this.players = players;
        this.points = points;
    }
    score(){
            console.log(`${this.players} has ${this.points} `);
    }
}

let player1 = new Player('Player1',player1cards[valueCounter])
let player2 = new Player('Player2',player2cards[valueCounter])





if( player1cards[valueCounter].length > player2cards[valueCounter].length){
    alert ('Player 1 has defeated you!');
} else if ( player1cards[valueCounter] < player2cards[valueCounter]){
    alert('Player 2 has defeated you!');
}else if ( player1cards[valueCounter] = player2cards[valueCounter])
    alert(`It's a DRAW!`)
}
