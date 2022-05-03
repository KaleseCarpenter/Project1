// Create a function to start the game with the play button

// function playBtn() {
//     document.getElementById("letsPlay").innerHTML = "Hello World";
//   }

const catchPhrases = [
    "When it rains____",
    "It's raining ___ & ___", 
    "Kill two birds ___",
    "___ ___ the bush",
    "___ ____ the doubt",
    "It's ___ ____ science",
    "__ ___, No gain",
    "A ___ __ disguise", 
    "Break __ ___",  
    "A dime _ ___",
];

const playBtn = () => {
    catchPhrases.forEach(element => {
      document.getElementById('wordsScreen').innerHTML +=
      `<div>${element}</div><br />`;
      // here result is the id of the div present in the DOM
   });
};




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


​let text =  [
    "When it rains____",
    "It's raining ___ & ___", 
    "Kill two birds ___",
    "___ ___ the bush",
    "___ ____ the doubt",
    "It's ___ ____ science",
    "__ ___, No gain",
    "A ___ __ disguise", 
    "Break __ ___",  
    "A dime _ ___",
    
    ];
let i = 0;
while (i < 6) {
    document.write(".text" + i);
  text += "phrases" + i;
  i++;
}
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



