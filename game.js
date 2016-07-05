var prompt = require('prompt-sync')();
var color = require('colors');
var player = {
  bankroll: 100
};

function randomNumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var keepPlaying = 'yes';

while (keepPlaying === 'yes') {
  var bet = prompt('Place your bets(between $5 and $10 please)!'); //TODO: do a check to make sure they don't bet an amount greater than their bankroll.
  var guess = prompt('Now guess a number between 1 and 10!');
  var answer = randomNumGen(1,10);

  if (guess === answer) {
     player.bankroll += bet;
     var correctResponse = "You are correct! You won $" + bet + "! You now have $" + player.bankroll + ".";
     console.log(correctResponse.green);
  } else if (guess > (answer - 1) && guess < (answer + 1)) { 
    var closeResponse = "The answer was " + answer +  "! You were off by just 1! You will still retain your previous balance of $" + player.bankroll + ".";
    console.log(closeResponse.yellow);  
  } else {
    var wrongResponse = "Wrong! The answer was " + answer + "! You lost $" + bet + "! Your balance is now $" + player.bankroll + "."; 
    player.bankroll -= bet;
    console.log(wrongResponse.red);
  }
  if (player.bankroll <= 0) {
    console.log("You're bankrupt!".red);
    keepPlaying = false;
  } else {
  keepPlaying = prompt('Make another bet?'.green);
  }
}
