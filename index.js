alert (`It's time for WAR.
Are you ready?`);
/* I started by creating a class for card and deck 
so I could build out it's properties f*/
class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;         
    }
}
class Deck{
    constructor() {
        this.deck = [];
    }
    createDeck(suits, values){
        for (let suit of suits){
            for (let value of values){
                this.deck.push(new Card ( suit, value));
            }
        }
        return this.deck;  
    }
// I'm using the .floor method that rounds down to next integer
    shuffle(){
        let counter = this.deck.length, temp, i;

        while(counter){
            i = Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }
// this is a method of the deck class where 
    deal(){
        let turn = [];
        while(turn.length < 0){
            turn.push(this.deck.pop());
        }
        return turn;
    }   
}
/* create deck by iterating through my suit and values array and then using the push
 method to create the combinations of suit and value to create a deck of cards*/
let suits = ['spades', 'diamonds', 'hearts', 'clubs'];
let values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = new Deck();
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
/* Here we are suits, and card values as an argument for the createDeck Method*/ 
deck.createDeck(suits, values);
deck.deal();

let newDeck = deck.shuffle();
let playerOneDeck = newDeck.splice(26,52);
let newDeck2 = deck.shuffle();
let playerTwoDeck = newDeck2.splice(0,26);

for(i = 0; i < playerOneDeck.length ; i++){
    for(x = 0; x < playerTwoDeck.length ; x++){

console.log("Player One ",playerOneDeck);     
console.log("Player Two ",playerTwoDeck); 

function popOne(array){
        return array.pop();
    }

let c1 = popOne(playerOneDeck);
let c2 = popOne(playerTwoDeck);


console.log(c1);
console.log(c2);

        if(c1.value > c2.value){
            console.log('Player one wins!');
           
        }else if(c1.value < c2.value){
            console.log('Player Two wins!');

        }else{ (c1.value = c2.value);
            console.log('draw')
        }

    }
    
}


// function scoreBoard(array1,array2){
//     var c1 = popOne(playerOneDeck);
//     var c2 = popOne(playerTwoDeck);
    
//     if(array1(value) > array2(value)){
//         console.log('Player one wins!');
       
//     }else if(array1(value) < array2(value)){
//         console.log('Player Two wins!');

//     }else{ (array1(value) = array2(value));
//         console.log('draw')
//     }

// }

// }
// scoreBoard(c1,c2);
// }

/* Things I tried to build a scoreboard-
I tried creating a function that used if,else if, else statement to return  
a point if player one's value was greater, subtract a point if player two's 
greater and no points if there was a draw. If player one had over 13 points 
it would be declared winner but I could not get it work properly.
I also tried creating empty arrays and setting point to 1 and use the push 
to add a point to its corresponding array but it kept creating array for 
every value comparison 



not sure why but only would iterate 26-4 when it was suppose to iterate 26-0*/