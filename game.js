'use strict';
var prompt = require('prompt-sync')();
var color = require('colors');

var allPlayers = [];
// class Player {
//   constuctor (name) {
//     this.name = name;
//     this.bankroll = 100;
//     this.num_wins = 0;
//     allPlayers.push(this);
//   }
//
//   switchPlayer() {                      // assumes that there will only be two players 
//     if (this === allPlayers[0]) {
//       currentPlayer = allPlayers[1] 
//     } else {
//       currentPlayer = allPlayers[0] 
//     }
//   }
// }

function Player(name) {
  this.name = name;
  this.bankroll = 100;
  this.num_wins = 0;
  allPlayers.push(this);
}

function switchPlayer() {
  if (this === allPlayers[0]) {
    currentPlayer = allPlayers[1] 
  } else {
    currentPlayer = allPlayers[0] 
  }
}

function randomNumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//console.log(allPlayers);

var playerName = prompt('What is the first player\'s name?');
var playerOne = new Player(playerName);

playerName = prompt('What is the second player\'s name?');
var playerTwo = new Player('p2: ' + playerName);

var currentPlayer = playerOne;

console.log(allPlayers);
//
while (playerOne.bankroll > 0 && playerTwo.bankroll > 0) {
   
   var bet = prompt(currentPlayer.name + ', place your bets(between $5 and $10 please)!'); //TODO: do a check to make sure they don't bet an amount greater than their bankroll.
   var guess = prompt('Now guess a number between 1 and 10!');
   var answer = randomNumGen(1,10);
//
  if (guess === answer) {
     currentPlayer.bankroll += bet;
     var correctResponse = "You are correct! You won $" + bet + "! You now have $" + player.bankroll + ".";
     console.log(correctResponse.green);
  } else if (guess > (answer - 1) && guess < (answer + 1)) { 
    var closeResponse = "The answer was " + answer +  "! You were off by just 1! You will still retain your previous balance of $" + currentPlayer.bankroll + ".";
    console.log(closeResponse.yellow);  
  } else {
    var wrongResponse = "Wrong! The answer was " + answer + "! You lost $" + bet + "! Your balance is now $" + currentPlayer.bankroll + "."; 
    currentPlayer.bankroll -= bet;
    console.log(wrongResponse.red);
  }
  if (currentPlayer.bankroll <= 0) {
    console.log("You're bankrupt!".red);
    keepPlaying = false;
  } else {
    keepPlaying = prompt('Make another bet?'.green);
  }

  currentPlayer.changePlayer();

}
