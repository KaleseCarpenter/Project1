// Create a function to start the game with the play button and display random phrase

const Player1 = document.getElementById("playerUno");
    Player1.addEventListener("click", playBtn);

const wordsScreen = document.getElementById("wordsScreen")
catchPhrases = {
  "when it rains __ ___": "it pours",
  "wt's raining ___ & ___": "cats dogs",
  "kill two birds ___ __ ____": "with one stone",
  "___ ____ the bush": "beating around",
  "____ ___ the doubt": "benefit of",
  "it's __ ____ science": "not rocket",
  "__ ___, no gain":"no pain",
  "A _____ __ disguise": "blessing in", 
  "break __ ___": "a leg",  
  "A dime _ ___":"a dozen",
  "make _ ___ ____ short": "a long story",
  "you're pulling __ ___":"my leg",
  "feeling under __ _____":"the weather",
  "___ ___ when you're having fun": "time flies",

}
  var clicks = 0;
    function playBtn() {
      let phraseGuesses = Object.keys(catchPhrases)
      // console.log it to see the answers
      console.log(phraseGuesses)
//     let phraseCaught = phraseGuesses[Math.floor(Math.random() * phraseGuesses.length)]
//       wordsScreen.innerHTML= phraseCaught
//       //this is counting the amount of time the player clicks the button, it will disable the button after 5 turns
//       clicks += .5;
//       document.getElementById("pOneClicks").innerHTML = clicks;
//       //if amount of clicks is = to 5 then disable the button, it's player 2's turn.
//       if (clicks === 6) {
//       document.getElementById("playerUno").disabled = true;
//         let playerDosTurn = prompt(" Player 2's Turn. You Ready? ");

//         if (playerDosTurn === "yes,Yes") {
//       let nextPLayer = document.querySelector(".playerTwo");
//     }
//     // catchPhrases.forEach((element)=>{
//     //   wordsScreen.innerHTML += 
//     // })
// };


// add counter to the Player1 button set = to 0 or 1, if counter = once they get to 5, next layer turn.
// if counter === 5 diplayer 2 turn.


/*  Create a while loop for the phrases so that it keeps showing new
phrases after every answer until the Player 1 has reached 5 turns.*/
// random value generated with Math.random()

// const textScreen = document.querySelector(".textScreen").innerHTML = " ";
// var catchPhrases = [
//     "When it rains____",
//     "It's raining ___ & ___", 
//     "Kill two birds ___",
//     "___ ___ the bush",
//     "___ ____ the doubt",
//     "It's ___ ____ science",
//     "__ ___, No gain",
//     "A ___ __ disguise", 
//     "Break __ ___",  
//     "A dime _ ___",
    
//     ]
//     let phraseCaught = catchPhrases[Math.floor(Math.random() * catchPhrases.length)]
//     console.log(phraseCaught)//This gives you any string from catchPhrases 





/*​var catchPhrases = 'When it rains____',"It's raining ___ & ___", "Kill two birds ___", "___ ___ the bush",
     "___ ____ the doubt", "It's ___ ____ science", "__ ___, No gain",
     "A ___ __ disguise", "Break __ ___",  "A dime _ ___";
var i=0;
while (catchPhrases.length) {
  var phraseCaught = catchPhrases.pop();
  document.write("<p>" + phraseCaught + "</p>");
}*/






/*The while loop loops through a block of code as long as a specified condition is true.*/


// ​let text =  [
//     "When it rains____",
//     "It's raining ___ & ___", 
//     "Kill two birds ___",
//     "___ ___ the bush",
//     "___ ____ the doubt",
//     "It's ___ ____ science",
//     "__ ___, No gain",
//     "A ___ __ disguise", 
//     "Break __ ___",  
//     "A dime _ ___",
    
//     ];
// let i = 0;
// while (i < 6) {
//     document.write(".text" + i);
//   text += "phrases" + i;
//   i++;
// }
// document.getElementById("letsPlay").innerHTML = text;



// const result = words.filter(word => word.length > 1);

// console.log(result);






/* create a prompt or form so the player can enter their answer after each phrase pops up*/
// ​var correct = "AA";
// var guess = "";
// while (guess != correct){
//   guess = prompt ("Question?", "");
//   if (guess == correct){
//     alert ("Correct");
//   } else {
//     alert ("that's not it...");
//   }
// }

/* Create a new while loop for Player 2 that runs 5 times */


/* Create a function that compares the scores of Player 1 & 2 and gives highest score using Math.max
Announces the winner with an alert */

// Create a funtion for a possible bonus round if they tie in score



/*Play again button to restart the game*/
