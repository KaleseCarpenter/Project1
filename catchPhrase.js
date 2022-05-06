// Create a function to start the game with the play button and display random phrase

// const Player1 = document.getElementById("playerUno");
//     Player1.addEventListener("click", playBtn);
// const wordsScreen = document.getElementById("wordsScreen")

// **********************Start Game****************************************

function playBtn() {
  let text;
  let person = prompt(" Enter your name:", "Enter Your Name");
    if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text =
      "Hello " +
      person +
      ". You will be guessing the missing words from popular phrases. " +
      "<br>GOOD LUCK!";
    document.getElementById("para").innerHTML = text;
  }
   setTimeout(resume,1000)
}
//*****************Resume Game -- Player 1***********************
function resume() {


 let q1 = prompt("Finish the phrase below" + "\nWhen it rains");
    if (q1 == null || q1 == "it pours") {
      alert("You got it " + person + "!" + " 10 Points");
  } else {
      alert(
      "Wrong Answer, Zero Points!" + "\nCorrect Answer: When It rains it pours"
    );
  }

  let q2 = prompt("Finish the phrase below" + "\nBeating around");
    if (q2 == null || q2 == "the bush") {
      alert("Woohoo! " + person + "!" + " 10 Points");
  } else {
      alert(
      "Wrong Answer, Zero Points!" + "\nCorrect Answer: Beating around the bush");
  }

  let q3 = prompt("A blessing");
    if (q3 == null || q3 == "in disguise") {
      alert("Woohoo! " + person + "!"+ " 10 Points");
  } else {
      alert("Wrong Answer, Zero Points!" +
        "\nCorrect Answer: A blessing in disguise ");
  }

  let q4 = prompt("Finish the phrase below" + "\nSkating on");
    if (q4 == null || q4 == "thin ice") {
      alert("Woohoo! " + person + "!"+ " 10 Points");
  } else {
      alert("Wrong Answer, Zero Points!" +
        "\nCorrect Answer: Skating on thin ice");
  }

  let q5 = prompt("Finish the phrase below" + "\nActions speak louder");
  if (q5 == null || q5 == "than words") {
    alert("Woohoo! " + person + "!"+ " 10 Points");
} else {
    alert("Wrong Answer, Zero Points!" +
      "\nCorrect Answer: Actions speak louder than words");
}   alert("It's Player 2's turn");
setTimeout(playerTwoTurn,1000)
}

//******************Player 2 Questions*******************
function playerTwoTurn() {


let ques1 = prompt("Finish the phrase below" + "\nIf it ain't broke");
    if (ques1 == null || ques1 == "don't fix it") {
      alert("You got it " + person + "!" + " 10 Points");
  } else {
      alert(
      "Wrong Answer, Zero Points!" + "\nCorrect Answer: If it ain't broke don't fix it"
    );
  }

  let ques2 = prompt("Finish the phrase below" + "\nBenefit of ");
    if (ques2 == null || ques2 == "the doubt") {
      alert("Woohoo! " + person + "!" + " 10 Points");
  } else {
      alert(
      "Wrong Answer, Zero Points!" + "\nCorrect Answer: Benefit of the doubt");
  }

  let ques3 = prompt("Finish the phrase below" + "\nThe pot calling");
    if (ques3 == null || ques3 == "the kettle black") {
      alert("Woohoo! " + person + "!"+ " 10 Points");
  } else {
      alert("Wrong Answer, Zero Points!" +
        "\nCorrect Answer: The pot calling the kettle black");
  }

  let ques4 = prompt("Finish the phrase below" + "\nTime flies when");
    if (ques4 == null || ques4 == "you're having fun") {
      alert("Woohoo! " + person + "!"+ " 10 Points");
  } else {
      alert("Wrong Answer, Zero Points!" +
        "\nCorrect Answer: Time flies when you're having fun");
  }

  let ques5 = prompt("Finish the phrase below" + "\nCuriosity killed");
  if (ques5 == null || ques5 == "the cat") {
    alert("Woohoo! " + person + "!"+ " 10 Points");
} else {
    alert("Wrong Answer, Zero Points!" +
      "\nCorrect Answer: Curiosity killed the cat");
}
}

//Show total score for both players on Screen
 if player one's input  is equal to q1 
 then add 10 points to score
 if player two's input is equal to ques
 then add 10 points to score
 Use a boolean or mathMax to compare scores and get the winner
// const addScoreToPlyrUno = () =>{
//   playerOne.score += 10

//   populateScore()
// }

// const addScoreToPlyrDos = () =>{
//   playerOne.score += 10

//   populateScore()
// }




//************Play again -- Restart Game***********




// let catchPhrases = [
//       { catchPhrases: "When it rains", answer: "it pours" },
//       { catchPhrases: "it's raining", answer:  "cats dogs"},
//       { catchPhrases: "kill two birds", answer: "with one stone"},
//       { catchPhrases: "beating around", answer: "the bush"},
//       { catchPhrases: "benefit of", answer:"the doubt"},
//       { catchPhrases: "it's not _ science", answer:"rocket"},
//       { catchPhrases: "___ ___ no gain", answer: "no pain"},
//       { catchPhrases: "A blessing", answer: "in disguise"},
//       { catchPhrases: "break a", answer: "leg"},
//       { catchPhrases: "A dime", answer: "a dozen"},
//       { catchPhrases: "make a long", answer: "story short"},
//       { catchPhrases: "you're pulling", answer: "my leg"},
//       { catchPhrases: "feeling under", answer: "the weather",
//       { catchPhrases: "time flies when", answer: "you're having fun"},
//       { catchPhrases: "that's __ ___ straw", answer: "the last"},
//       { catchPhrases: "off the", answer: "hook"},
//       { catchPhrases: "actions speak louder", answer: "than words"},
//       { catchPhrases: "bite off more than you", answer: "can chew"},
//       { catchPhrases: "skating on", answer: "thin ice"},
//       { catchPhrases: "on cloud", answer: "nine"},
//       { catchPhrases: "through thick", answer: "and thin"},
//       { catchPhrases: "that ship", answer: " has sailed"},
//       { catchPhrases: "the pot calling", answer: "the kettle black"},
//       { catchPhrases: "calm before", answer: "the storm"},
//       { catchPhrases: "curiosity killed the", answer: "cat"},
//       { catchPhrases: "burning", answer: "bridges"},
//       { catchPhrases: "head in the", answer: "clouds"},
//       { catchPhrases: "not playing with a full", answer: "deck"},
//       { catchPhrases: "jump on the band", answer: "wagon"},
//       { catchPhrases: "like two peas", answer: "in a pod"},
//       { catchPhrases: "through thick", answer: "and thin"},
//       { catchPhrases: "it takes __ ___ tango", answer: "two to" },
//       { catchPhrases: "straight from the horse's", answer: "mouth"},
//       { catchPhrases: "every dog has", answer: "his day"},
//       { catchPhrases: "keeping up with", answer: "the joneses"},
//       { catchPhrases: "if it ain't broke", answer: "don't fix it"}

//     ];

// // const randomQuestions = () => {
// //   const index = Math.floor(Math.random() * catchPhrases.length);
// //   const question = catchPhrases.splice(index, 1);
// //   return question[0];
// //   question = prompt("Please enter your name:", "Harry Potter");

// // }






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
