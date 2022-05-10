// Create a function to start the game with the play button and display random phrase


// **********************Start Game****************************************
//  startGame() {
// //   let text;
// //    person = prompt("What is your name:", "Enter Your Name Here");
// //     if (person == null || person == "") {
// //     text = "No name Provided";
// //   } else {
// //     text =
// //       "Hello " +
// //       person +
// //       " 👋😃. You will be guessing the missing words from popular phrases. " +
// //       "<br>GOOD LUCK!";
// //     document.getElementById("para").innerHTML = text;
// //   }
//    setTimeout(resume,3000)
// }



// ******************START GAME*****************
var startGame = () => {
  //   let text;
  //  person = prompt("What is your name:", "Enter Your Name Here");
  //   if (person == null || person == "") {
  //   text = "No name Provided";
  // } else {
  //   text =
  //     "Hello " +
  //     person +
  //     " 👋😃. You will be guessing the missing words from popular phrases. " +
  //     "<br>GOOD LUCK!";
  //   document.getElementById("para").innerHTML = text;
  // }

  // var ques1 = prompt(catchPhrases1.catchPhrases);
  //   if (ques1 === catchPhrases1.answer) {
  //     document.getElementById("para").innerText =
  //     "You got it!" + " +10 Points";
  //   }
    
  //   var ques2 = prompt(catchPhrases2.catchPhrases);
  //   if (ques2 === catchPhrases2.answer) {
  //     document.getElementById("para").innerText =
  //     "You got it!" + " +10 Points";
  //   }








  ques1 = prompt("Finish the phrase below\n" + catchPhrases1.catchPhrases);   //this grabs phrase 34's question
  if (ques1 === catchPhrases1.answer){   // this returns the corresponding answer to question 34
      // document.getElementById("para").innerText = "You got it!" + " +10 Points"
    // alert("You got it!" + " +10 Points");
      addPoint() // this adds points to score after correct answer
      console.log(score) // to check to see if score is logging
  
  }else {
      alert("Wrong Answer, Zero Points!" + "\nWhen it rains it pours");
  }
  
  ques2 = prompt(catchPhrases2.catchPhrases);
  if (ques2 === catchPhrases2.answer){
      alert("You got it!" + " +10 Points");
      addPoint()
      console.log(score)
  }else {
      alert("Wrong Answer, Zero Points!" + "\nIt's raining cats and dogs");
  }

  ques3 = prompt(catchPhrases3.catchPhrases);
  if (ques3 === catchPhrases3.answer){
      alert("You got it!" + " +10 Points");
      addPoint()
      console.log(score)
  }else {
      alert("Wrong Answer, Zero Points!" + "\nKill two birds with one stone");
  }
  
  ques4 = prompt(catchPhrases4.catchPhrases);
  if (ques4 === catchPhrases4.answer){
      alert("You got it!" + " +10 Points");
      addPoint()
      console.log(score)
  }else {
      alert("Wrong Answer, Zero Points!" + "\nBeating around the bush");
  }

  ques5 = prompt(catchPhrases5.catchPhrases);
  if (ques5 === catchPhrases5.answer){
      alert("You got it!" + " +10 Points");
      addPoint()
      console.log(score)
  }else {
      alert("Wrong Answer, Zero Points!" + "\nBenefit of the doubt");
  }
      alert("G A M E  O V E R! \nIt's Player 2's turn");
  //     // setTimeout(playerTwoTurn,3000)
    

  
      
}
//***********************Score Keeper***************************
let score = 0
let oneScoreKeeper = document.querySelector('.p1Score')
let twoScoreKeeper = document.querySelector(".pTwoScore");

const addPoint = () => {
  
  if (ques1 === catchPhrases1.answer) {
      // let relevantTarget = document.querySelector(".counter");
  oneScoreKeeper.innerHTML = score += 10   
}
}

//   if (q1 === catchPhrases1.answer){
//   twoScoreKeeper.innerHTML = += 10
// }

//******************Player 2 Questions*******************


// alert("Player 2, Click Start");
// ques6 = prompt(catchPhrases6.catchPhrases);
//   if (ques6 === catchPhrases6.answer){
//       alert("You got it!" + " +10 Points");
//       addPoint()
//       console.log(score)
//   }else {
//       alert("Wrong Answer, Zero Points!" + "\nWhen it rains it pours");
  
//   }





// function playerTwoTurn() 










//*****************Resume Game -- Player 1***********************

// var person = "";
// let playersTurn = true
// let playerScoreKeeper = {
//     true : 0,
//     false: 0
// }

// 






// setTimeout(playerTwoTurn,1000)





//******Show total score for both players on Screen******
//  if player one's input  is equal to q1 
//  then add 10 points to score
//  if player two's input is equal to ques
//  then add 10 points to score
//  Use a boolean or mathMax to compare scores and get the winner


 // const addScoreToPlyrUno = () =>{
//   playerOne.score += 10

//   populateScore()
// }

// const addScoreToPlyrDos = () =>{
//   playerOne.score += 10

//   populateScore()
// }




//************Play again -- Restart Game***********











// while(catchPhrases.length) {
//   const question = randomQuestions();
//   const askedQuestion = prompt(question.question);
//   if (askedQuestion === null) {
//     console.log("User clicked cancel");
//   } else {
//     console.log(askedQuestion.toLowerCase() === question.answer);
//   }
// }
// const askQuestions = prompt(question);










// add counter to the Player1 button set = to 0 or 1, if counter = once they get to 5, next layer turn.
// if counter === 5 diplayer 2 turn.

/*The while loop loops through a block of code as long as a specified condition is true.*/

/* Create a new while loop for Player 2 that runs 5 times */

/* Create a function that compares the scores of Player 1 & 2 and gives highest score using Math.max
Announces the winner with an alert */

// Create a funtion for a possible bonus round if they tie in score

/*Play again button to restart the game*/
