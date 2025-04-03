// main logic for the game is a function named runGame() which
// takes an argument passed in from the html file.
// the function tasks are to:
// 1. declare the variables
// 2. register a player choice, either heads or tails
// 3. generate a random number 
// 4. map the number to a coin face, either heads or tails
// 5. compare the coin face to the player choice 
// 6. generate a result, either a win or a loss
// 7. output the choice and the result


// Each line of code below is explained by the comment underneath it,
// comments which may seem opaque at first but do contain keywords you can search up

let numWon;
let numLoss;
let numGames;
// declares three global variables, set when the page is loaded,
// which are updated each time the function below is run, and which
// are reset to zero whenever the browser tab is reloaded

function runGame(x) {
// creates a function called someSmartName that takes a single parameter: param
  
  let pick = x;
  // creates the variable used to store the player's chosen coin face
  // variable is set to the value of param, the parameter of the function
  // the value of param derives from the value of the argument when the function is called
  // the function is called in the html, in an onclick attribute, and param is declared there
  // clicking the heads button sets param to 'heads', while the tails button sets it to 'tails'
  
  let randNum = Math.ceil(Math.random() * 2);
  // creates a variable to hold a random integer, either 1 or 2

  let choice;
  // creates a variable to store the computer's choice

  // conditional statement 
  if (randNum == 1) {       // if the random number equals 1
    choice = 'tails';          // call the result 'tails'
  } else {                    // otherwise
    choice = 'heads';         // call the result 'heads'
  };                          

  let status;
  // creates a variable to determine the game result

  // conditional statement 
  if (pick === choice) {    // if values of the coin flip and player choice match,
    status = "win";      // call the result a win
    numWon++;      // and increment global wins counter
  } else {                // otherwise
    status = "lose";   // call it a loss
    numLoss++;         // and increment global loss counter
  };                      

  numGames++;
  // increments the global variable declared outside this function

  let lorem = document.getElementById('ipsum');
  // create a variable and set it to the element to hold the predicted choice 
  lorem.innerText = choiceName; 
  // output 'heads' or 'tails'

  // follow that same pattern for each of the following pairs:
  
  // store an element to output the result of the flip 
  // output flip results

  // store an element to output the result of the toss
  // output 'win' or 'loss'

  // store an element to output the number of games played
  // output # of games played (incremented when the function runs)

  // store an element to output the number of games won
  // output # of games played (incremented when the function runs)

  // store an element to output the number of games lost
  // output # of games played (incremented when the function runs)
}