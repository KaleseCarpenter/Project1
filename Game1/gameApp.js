// console.log(randomPhrases); //This is to see all the objects in the browser console

const quesNumber = document.querySelector(".question-number");
const quesText = document.querySelector(".question-text"); //question text
const optionContainer = document.querySelector(".option-container");

let quesCounter = 0;
let currentQues; /*let variables cannot be read/written until they have been declared. 
If no initial value is specified on declaration, the variable is initialized with a value of undefined*/
let availableQues = []; // available questions

//********pushes the questions into the availableQues array
function setAvlableQues(){
    const totalQuestion = randomPhrases.length; 
    for(let i=0; i<totalQuestion; i++){
        availableQues.push(randomPhrases[i])/*The push() method adds one or
     more elements to the end of an array and returns the new length of the array.*/
    }
    // console.log(randomPhrases) //to see arrays in inspect
}

//********set question number and question options
function getNewQues(){
    //console.log("hi");"
    //********set question number, shows a top of page
    quesNumber.innerHTML = "Question " + (quesCounter + 1) + " of " + randomPhrases.length;
    //set question text
    //get random question
    const questionIndex = availableQues[Math.floor(Math.random() * availableQues.length)]
    console.log(questionIndex)


}


window.onload = function(){ // this function will be called when the window's load function event fires.
    //********1st set all catch phrase questions in availableQues array
    setAvlableQues();
    //********2nd we will call getNewQues(); function
    getNewQues();

}