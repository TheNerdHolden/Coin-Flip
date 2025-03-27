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

let;
let;
let;
// declares three global variables, set when the page is loaded,
// which are updated each time the function below is run, and which
// are reset to zero whenever the browser tab is reloaded

function someSmartName(param) {
// creates a function called someSmartName that takes a single parameter: param
  
  let someVariable = param;
  // creates the variable used to store the player's chosen coin face
  // variable is set to the value of param, the parameter of the function
  // the value of param derives from the value of the argument when the function is called
  // the function is called in the html, in an onclick attribute, and param is declared there
  // clicking the heads button sets param to 'heads', while the tails button sets it to 'tails'
  
  let;
  // creates a variable to hold a random integer, either 1 or 2

  let;
  // creates a variable to store the player's choice

  // conditional statement 
  if (something == 1) {       // if the random number equals 1
    'do stuff here';          // call the result 'tails'
  } else {                    // otherwise
    'do other stuff';         // call the result 'heads'
  };                          

  let;
  // creates a variable to determine the game result

  // conditional statement 
  if (this === that) {    // if values of the coin flip and player choice match,
    'do stuff here';      // call the result a win
    'do more stuff';      // and increment global wins counter
  } else {                // otherwise
    'do another stuff';   // call it a loss
    'and do more'         // and increment global loss counter
  };                      

  'total of games played'++;
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