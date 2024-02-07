# Card Game: WAR

A simple JavaScript implementation of the card game "WAR", utilizing Object-Oriented Programming (OOP) principles. This codebase demonstrates the use of classes and objects to encapsulate game logic, properties, and behaviors, offering a modular and scalable approach to game development.

## Overview

The game leverages OOP concepts through the definition of `Card` and `Deck` classes, managing the mechanics of deck creation, shuffling, dealing, and the gameplay itself. It splits a standard 52-card deck evenly between two players, who then draw cards to compete in rounds based on card values.

## Features

- **Object-Oriented Design**: Utilizes classes to model game components.
- **Card Class**: Represents a single playing card with a suit and a value.
- **Deck Class**: Manages a deck of cards, including operations such as creation, shuffling, and dealing.
- **Game Logic**: Implements simple gameplay where players draw cards and compare values to determine round winners.

## Usage

1. **Creating a Deck**: Instantiate a `Deck` object. Use `createDeck(suits, values)` to generate a 52-card deck.
2. **Shuffling the Deck**: Call `shuffle()` on your deck object to mix the cards.
3. **Dealing Cards**: Draw cards from the deck with `deal()`.
4. **Playing the Game**: Compare the drawn card values to identify the winner of each round.

## Example

```javascript
let suits = ['spades', 'diamonds', 'hearts', 'clubs'];
let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();

// Distributing cards to two players
let playerOneDeck = deck.deck.slice(0, 26);
let playerTwoDeck = deck.deck.slice(26);

// Simulating one round of the game
let playerOneCard = playerOneDeck.pop();
let playerTwoCard = playerTwoDeck.pop();

console.log(`Player One draws ${playerOneCard.value} of ${playerOneCard.suit}`);
console.log(`Player Two draws ${playerTwoCard.value} of ${playerTwoCard.suit}`);

if (cardValue[playerOneCard.value] > cardValue[playerTwoCard.value]) {
    console.log('Player One wins the round!');
} else if (cardValue[playerOneCard.value] < cardValue[playerTwoCard.value]) {
    console.log('Player Two wins the round!');
} else {
    console.log('It\'s a draw!');
}
