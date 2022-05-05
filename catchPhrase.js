// Create a function to start the game with the play button and display random phrase

const Player1 = document.getElementById("playerUno");
    Player1.addEventListener("click", playBtn);

const wordsScreen = document.getElementById("wordsScreen")
var catchPhrases = [
  "when it rains it pours",
  "it's raining cats dogs",
  "kill two birds with one stone",
  "beating around the bush ",
  "benefit of the doubt",
  "it's not rocket science",
  "no pain, no gain",
  "A blessing in disguise", 
  "break a leg",  
  "A dime a dozen",
  "make a long story short ",
  "you're pulling my leg",
  "feeling under the weather",
  "time flies when you're having fun"

];

var gamesWon = 0;
var phraseGuesses =[];
var gezWrd= [];
var usedGuessingWords = [];
var predictWrd;
var predictNum;



//Begin Playing
function playerStart() {




/*var clicks = 0;
    function playBtn() {
      let phraseGuesses = Object.keys(catchPhrases)
      // console.log it to see the answers
      console.log(phraseGuesses)
    let phraseCaught = phraseGuesses[Math.floor(Math.random() * phraseGuesses.length)]
      wordsScreen.innerHTML= phraseCaught
      //this is counting the amount of time the player clicks the button, it will disable the button after 5 turns
      clicks += .5;
      document.getElementById("pOneClicks").innerHTML = clicks;
      //if amount of clicks is = to 5 then disable the button, it's player 2's turn.
      if (clicks === 6) {
      document.getElementById("playerUno").disabled = true;
        let playerDosTurn = prompt(" Player 2's Turn. You Ready? ");

        if (playerDosTurn === "yes,Yes") {
      let nextPLayer = document.querySelector(".playerTwo");
    }
    // catchPhrases.forEach((element)=>{
    //   wordsScreen.innerHTML += 
    // })
};*/


// add counter to the Player1 button set = to 0 or 1, if counter = once they get to 5, next layer turn.
// if counter === 5 diplayer 2 turn.


/*  Create a while loop for the phrases so that it keeps showing new
phrases after every answer until the Player 1 has reached 5 turns.*/
// random value generated with Math.random()








/*The while loop loops through a block of code as long as a specified condition is true.*/





/* Create a new while loop for Player 2 that runs 5 times */


/* Create a function that compares the scores of Player 1 & 2 and gives highest score using Math.max
Announces the winner with an alert */

// Create a funtion for a possible bonus round if they tie in score



/*Play again button to restart the game*/
