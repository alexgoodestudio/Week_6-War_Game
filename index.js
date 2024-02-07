// alert (`It's time for WAR.
// Are you ready?`);
/* I started by creating a class for card and deck 
so I could build out it's properties */
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck(suits, values) {
        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(new Card(suit, value));
            }
        }
    }

    shuffle() {
        for (let i = 0; i < this.deck.length - 1; i++) {
            const j = Math.floor(Math.random() * (this.deck.length - i)) + i;
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; // Swap
        }
    }

    deal() {
        return this.deck.pop(); // Deal the top card
    }
}

// Define card values for comparison
const cardValue = {
    'A': 14,   
    'K': 13,
    'Q': 12,
    'J': 11,
    '10': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
};

// Usage
let suits = ['spades', 'diamonds', 'hearts', 'clubs'];
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();


// Splitting the deck for two players (assuming a game logic where each player gets half the deck)
let playerOneDeck = deck.deck.slice(0, 26);
let playerTwoDeck = deck.deck.slice(26);

// Example game logic to compare one card from each player
let playerOneCard = playerOneDeck.pop();
let playerTwoCard = playerTwoDeck.pop();

let playerOneCardValue = cardValue[playerOneCard.value];
let playerTwoCardValue = cardValue[playerTwoCard.value];

console.log(`Player One draws ${playerOneCard.value} of ${playerOneCard.suit}`);
console.log(`Player Two draws ${playerTwoCard.value} of ${playerTwoCard.suit}`);

if (playerOneCardValue > playerTwoCardValue) {
    console.log('Player One wins the round!');
} else if (playerOneCardValue < playerTwoCardValue) {
    console.log('Player Two wins the round!');
} else {
    console.log('It\'s a draw!');
}



// original

// class Card{
//     constructor(suit, value){
//         this.suit = suit;
//         this.value = value;         
//     }
// }
// class Deck{
//     constructor() {
//         this.deck = [];
//     }
//     createDeck(suits, values){
//         for (let suit of suits){
//             for (let value of values){
//                 this.deck.push(new Card ( suit, value));
//             }
//         }
//         return this.deck;  
//     }
// // I'm using the .floor method that rounds down to next integer
//     shuffle(){
//         let counter = this.deck.length, temp, i;

//         while(counter){
//             i = Math.floor(Math.random() * counter--);
//             temp = this.deck[counter];
//             this.deck[counter] = this.deck[i];
//             this.deck[i] = temp;
//         }
//         return this.deck;
//     }
// // this is a method of the deck class where 
//     deal(){
//         let turn = [];
//         while(turn.length < 0){
//             turn.push(this.deck.pop());
//         }
//         return turn;
//     }   
// }
// /* create deck by iterating through my suit and values array and then using the push
//  method to create the combinations of suit and value to create a deck of cards*/
// let suits = ['spades', 'diamonds', 'hearts', 'clubs'];
// let values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// let deck = new Deck();
// const cardValue = {
//     'A': 14,   
//     'K': 13,
//     'Q': 12,
//     'J': 11,
//     '10': 10,
//     '9': 9,
//     '8': 8,
//     '7': 7,
//     '6': 6,
//     '5': 5,
//     '4': 4,
//     '3': 3,
//     '2': 2,
// };
// /* Here we are suits, and card values as an argument for the createDeck Method*/ 
// deck.createDeck(suits, values);
// deck.deal();

// let newDeck = deck.shuffle();
// let playerOneDeck = newDeck.splice(26,52);
// let newDeck2 = deck.shuffle();
// let playerTwoDeck = newDeck2.splice(0,26);

// for(i = 0; i < playerOneDeck.length ; i++){
//     for(x = 0; x < playerTwoDeck.length ; x++){

// console.log("Player One ",playerOneDeck);     
// console.log("Player Two ",playerTwoDeck); 

// function popOne(array){
//         return array.pop();
//     }

// let c1 = popOne(playerOneDeck);
// let c2 = popOne(playerTwoDeck);


// console.log(c1);
// console.log(c2);

//         if(c1.value > c2.value){
//             console.log('Player one wins!');
           
//         }else if(c1.value < c2.value){
//             console.log('Player Two wins!');

//         }else{ (c1.value = c2.value);
//             console.log('draw')
//         }

//     }
    
// }

