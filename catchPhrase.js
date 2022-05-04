// Create a function to start the game with the play button and display random phrase

const Player1 = document.getElementById("playerUno");
    Player1.addEventListener("click", playBtn);
const wordsScreen = document.getElementById("wordsScreen")
const catchPhrases = [
  "When it rains __ ___",
  "It's raining ___ & ___", 
  "Kill two birds ___ __ ____",
  "___ ____ the bush",
  "____ ___ the doubt",
  "It's __ ____ science",
  "__ ___, No gain",
  "A _____ __ disguise", 
  "Break __ ___",  
  "A dime _ ___",
  "Make _ ___ ____ short",
  "You're pulling __ ___",
  "Feeling under __ _____",
  "___ ___ when you're having fun"

]
  var clicks = 0;
    function  playBtn() {
    let phraseCaught = catchPhrases[Math.floor(Math.random() * catchPhrases.length)]
      wordsScreen.innerHTML= phraseCaught
      
      clicks += .5;
      document.getElementById("pOneClicks").innerHTML = clicks;

      if (clicks === 5) {
      document.getElementById("playerUno").disabled = true;
    }
    // catchPhrases.forEach((element)=>{
    //   wordsScreen.innerHTML += 
    // })
};


// function playBtn() {
    
//     document.getElementById("pOneClicks").innerHTML = clicks;
    
//   if (clicks == 5) {
//   document.getElementById("playerUno").removeAttribute("onclick");
//   }
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



