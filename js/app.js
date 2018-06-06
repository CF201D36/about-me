// Safety goggles ON!
'use strict';

// Setup Variables
var startGame = false;
var userQuit = false;
var myScore = 0;
var userName = 'John Doe';
var userAnswer1, userAnswer2, userAnswer3, userAnswer4, userAnswer5;

var myQuestion1 = 'What is Ben\'s last name?';
var myQuestion2 = 'Name one of Ben\'s four main specialities:';
var myQuestion3 = 'What is the name of the site he founded?';
var myQuestion4 = 'Which college did Ben attend?';
var myQuestion5 = 'In what year did Ben graduate from college?';

var myAnswer1 = ['harris'];
var myAnswer2 = ['creator','innovator','technologist','entrepreneur'];
var myAnswer3 = ['gamacy','gamacy.com','www.gamacy.com'];
var myAnswer4 = ['western washington university','western', 'wwu'];
var myAnswer5 = ['2005'];

// Answer Checking Function
var checkAnswer = function(array, response) {
  if(array.includes(response)) {
    myScore++;
    return console.log('Correct!');
  }
  else {
    return console.log('Sorry, that\'s not correct.');
  }
};

// Trivia Launcher
var quizLaunch = function() {
  startGame = confirm('Ready player one?');
  
  // Begin Game
  if (startGame === true) { 
    userName = prompt('Okay! First, tell me your name: ');
    
    // Question 1
    if (userQuit !== true) {
      userAnswer1 = prompt(myQuestion1);
      console.log('Q1: ' + userAnswer1);
      var normalize1 = userAnswer1.toLowerCase();
      checkAnswer(myAnswer1, normalize1);
    }

    // Question 2
    if (userQuit !== true) { 
      userAnswer2 = prompt(myQuestion2);
      console.log('Q2: ' + userAnswer2);
      var normalize2 = userAnswer2.toLowerCase();
      checkAnswer(myAnswer2, normalize2);
    }
    else { userQuit = true; }
    
    // Question 3
    if (userQuit !== true) {
      userAnswer3 = prompt(myQuestion3);
      console.log('Q3: ' + userAnswer3);
      var normalize3 = userAnswer3.toLowerCase();
      checkAnswer(myAnswer3, normalize3);
    }
    else { userQuit = true; }

    // Question 4
    if (userAnswer3 !== false && userAnswer3 !== null) {
      userAnswer4 = prompt(myQuestion4);
      console.log('Q4: ' + userAnswer4);
      var normalize4 = userAnswer4.toLowerCase();
      checkAnswer(myAnswer4, normalize4);
    }
    else { userQuit = true; }

    // Question 5
    if (userAnswer4 !== false && userAnswer4 !== null) {
      userAnswer5 = prompt(myQuestion5);
      console.log('Q5: ' + userAnswer5);
      var normalize5 = userAnswer5.toLowerCase();
      checkAnswer(myAnswer5, normalize5);
    }
    else { userQuit = true; }
  }
  // End Game
  else {
    userQuit = true;
  }

  // Display Results
  if(userQuit) {
    alert('Okay! Thanks for playing!');
  }
  else {
    console.log('Final score = ' + myScore + ' out of 5.');
    alert(
      userName + ', you scored ' + myScore + ' out of 5. Here were the possible answers: \n\n' + 
      '1. ' + myQuestion1 + '\n' + myAnswer1 + '\n\n' +
      '2. ' + myQuestion2 + '\n' + myAnswer2 + '\n\n' +
      '3. ' + myQuestion3 + '\n' + myAnswer3 + '\n\n' +
      '4. ' + myQuestion4 + '\n' + myAnswer4 + '\n\n' +
      '5. ' + myQuestion5 + '\n' + myAnswer5 + '\n'
    );
  }
};