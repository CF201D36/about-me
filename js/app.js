// Safety goggles ON!
'use strict';

// Setup Variables
var startGame = false;
var userQuit = false;
var myScore = 0;
var myStatus = null;

var myQuestion1 = 'What is Ben\'s last name?';
var myQuestion2 = 'Name one of Ben\'s four main specialities:';
var myQuestion3 = 'What is the name of the site he founded?';
var myQuestion4 = 'Which college did Ben attend?';
var myQuestion5 = 'In what year did Ben graduate from college?';

var myAnswer1 = 'harris';
var myAnswer2 = ['creator','innovator','technologist','entrepreneur'];
var myAnswer3 = ['gamacy','gamacy.com','www.gamacy.com'];
var myAnswer4 = ['western washington university','western', 'wwu'];
var myAnswer5 = '2005';
var myAnswers = new Array();
myAnswers.push(myAnswer1,myAnswer2,myAnswer3,myAnswer4,myAnswer5);

var userName = null;
var userAnswer1 = null;
var userAnswer2 = null;
var userAnswer3 = null;
var userAnswer4 = null;
var userAnswer5 = null;
var userAnswers = new Array();

// Button Configuration
function quizLaunch() {
  startGame = confirm('Ready player one?');
  
  // Begin Game
  if (startGame === true) { 
    userName = prompt('Okay! First, tell me your name: ');
    
    // First Question
    userAnswer1 = prompt(myQuestion1);
    userAnswers.push(userAnswer1);
    console.log('Q1: ' + userAnswer1);

    // Continue Playing?
    if (userAnswer1 !== false && userAnswer1 !== null) { 
      userAnswer2 = prompt(myQuestion2);
      userAnswers.push(userAnswer2.toLowerCase);
      console.log('Q2: ' + userAnswer2);
    } 
    if (userAnswer2 !== false && userAnswer2 !== null) {
      userAnswer3 = prompt(myQuestion3);
      userAnswers.push(userAnswer3);
      console.log('Q3: ' + userAnswer3);
    }
    if (userAnswer3 !== false && userAnswer3 !== null) {
      userAnswer4 = prompt(myQuestion4);
      userAnswers.push(userAnswer4);
      console.log('Q4: ' + userAnswer4);
    }
    if (userAnswer4 !== false && userAnswer4 !== null) {
      userAnswer5 = prompt(myQuestion5);
      userAnswers.push(userAnswer5);
      console.log('Q5: ' + userAnswer5);
    }
  }
  // End Game
  else {
    userQuit = true;
  }
  
  // Calculate Score
  // for (let x = 0; x < userAnswers.length; x++) {
  //   var normalize = userAnswers[x];
  //   console.log(normalize);
  //   // if(myAnswers.contains(normalize)) {++myScore;}
  //   // else { 
  //   //   // do nothing 
  //   // }
  // }

  // Display Results
  if(userQuit) {
    alert('Thanks for playing!');
  }
  else {
    console.log('Final score = ' + myScore);
    myStatus = alert(
        'Let\'s see how you did, ' + userName + ': \n' + 
        '1. ' + myQuestion1 + '\n' + userAnswer1 + '\n\n' +
        '2. ' + myQuestion2 + '\n' + userAnswer2 + '\n\n' +
        '3. ' + myQuestion3 + '\n' + userAnswer3 + '\n\n' +
        '4. ' + myQuestion4 + '\n' + userAnswer4 + '\n\n' +
        '5. ' + myQuestion5 + '\n' + userAnswer5 + '\n'
    );
  }
}
