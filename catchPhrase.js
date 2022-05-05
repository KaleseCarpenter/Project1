// Create a function to start the game with the play button and display random phrase

// const Player1 = document.getElementById("playerUno");
//     Player1.addEventListener("click", playBtn);

// const wordsScreen = document.getElementById("wordsScreen")
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
  "time flies when you're having fun",
  "that's the last straw",
  "off the hook",
  "actions speak louder than words",
  "bite off more than you can chew",
  "on thin ice",
  "on cloud nine",
  "through thick and thin",
  "that ship has sailed",
  "the pot calling the kettle black",
  "calm before the storm",
  "curiosity killed the cat",
  "burn bridges",
  "head in the clouds",
  "not playing with a full deck",
  "jump on the bandwagon",
  "when in rome",
  "like two peas in a pod",
  "through thick and thin",
  "it takes two to tango",
  "straight from the horse's mouth",
  "every dog has his day",
  "keeping up with the joneses",
  "if it ain't broke, don't fix it"

];

function playBtn() {
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text;
}



// var gamesWon = 0;
// var phraseGuesses =[]; // variable for current letters guessed
// var gezWrd= []; // variable for current word I'm guessing
// var usedPhrases = [];//variable to get NEW Phrase to guess
// var phrasePredict; // stores the value for catchPhrases[Mathfloor & random]
// var predictNum;// variable to store amount of guesses you get based on the length of the phrase



// //Begin Playing
// function playerStart() {

// //Random word
// /*  Create a loop for the phrases so that it keeps showing new
// phrases after every answer until the Player 1 has reached 5 turns.*/
// // random value generated with Math.random()
// phrasePredict = catchPhrases[Math.floor(Math.random() * catchPhrases.length)].toUpperCase();

// // num of guess (higher or lower) depending on phrase length
// if (phrasePredict.length <= 5) {
//   predictNum = 3
// } else if (phrasePredict.length >5 && phrasePredict.length <= 7) {
  
//   // multiply by .5
//   predictNum = Math.floor(phrasePredict.length * .5)
// } else if (phrasePredict.length >7 && phrasePredict.length <= 10) {
//   predictNum = Math.floor(wordToMatch.length * .5)
// } else if (phrasePredict.length >10 && phrasePredict.length <= 14) {
//   predictNum = Math.floor(phrasePredict.length * .25)
// } else if (phrasePredict.length >14) {
//   predictNum = 8;
// }






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









/*The while loop loops through a block of code as long as a specified condition is true.*/





/* Create a new while loop for Player 2 that runs 5 times */


/* Create a function that compares the scores of Player 1 & 2 and gives highest score using Math.max
Announces the winner with an alert */

// Create a funtion for a possible bonus round if they tie in score



/*Play again button to restart the game*/
