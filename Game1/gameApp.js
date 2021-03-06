// console.log(randomPhrases); //This is to see all the objects in the browser console

const quesNumber = document.querySelector(".question-number");
const quesText = document.querySelector(".question-text"); //question text
const optionContainer = document.querySelector(".option-container");

let quesCounter = 0;
let currentQues; /*let variables cannot be read/written until they have been declared. 
If no initial value is specified on declaration, the variable is initialized with a value of undefined*/
let availableQues = []; // available questions
let availableOptions = []; //available options

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
    currentQues = questionIndex;
    quesText.innerHTML = currentQues.ques; //.ques is the key name for questions
                                    // console.log(questionIndex)
    //get the position of the 'questionIndex' from the availableQues array;
    const index1 = availableQues.indexOf(questionIndex);
    // console.log(index1)
    /*remove the 'questionIndex" from the availableQues array, so question doesn're repeat
    SPLICE -removing or replacing existing elements and/or adding new elements in place*/
    availableQues.splice(index1,1);
                                    // console.log(questionIndex)
                                    // console.log(availableQues)
    //set options
    //get the length of question options
    const optionLen = currentQues.options.length   //.options - The collection of OPTION elements contained by this element. 
    //push options into availableOptions
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }                               // console.log(availableOptions)
    //create options in html to show on screen
    for (let i=0; i<optionLen; i++){
        //random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of 'optionIndex' from the availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        //remove the 'optionIndex' from the availableOptions so option doesnt repeat
        availableOptions.splice(index2,1);
                                    // console.log(optionIndex);
                                    // console.log(availableOptions);
        const option = document.createElement('div');
        option.innerHTML = currentQues.options[optionIndex];
        option.id = optionIndex; // adds in the index for the id
        option.className = "option";
        optionContainer.appendChild(option) // this links in the container in my HTML
        option.setAttribute("onclick","getResult(this)");
    }                                
    quesCounter++
}

//get the result of the current attempt on click
function getResult(element){
    const id = parseInt(element.id);        //parseInt function converts its first argument to a string, parses that string, then returns an integer 
                                            //console.log(typeof id)
    //get answer by comparing the id of clicked option
    if(id === currentQues.answer){
       element.classList.add("correct");
    }
    else{
        console.log("answer is wrong");
    }
}

function next(){
    if(quesCounter === 5){
        prompt("game over")
    }
    else{
        getNewQues();
    }
}

window.onload = function(){ // this function will be called when the window's load function event fires.
    //********1st set all catch phrase questions in availableQues array
    setAvlableQues();
    //********2nd we will call getNewQues(); function
    getNewQues();

}