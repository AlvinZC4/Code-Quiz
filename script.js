// Setting global variables to objects in the DOM
var intro = document.querySelector("#intro");
var questOne = document.querySelector("#questone");
var questTwo = document.querySelector("#questtwo");
var questThree = document.querySelector("#questthree");
var questFour = document.querySelector("#questfour");
var questFive = document.querySelector("#questfive");
var allDone = document.querySelector("#alldone");
var highScores = document.querySelector("#highscores");
var ansChk = document.querySelector("#anschk");
var viewScores = document.querySelector("#viewscores");
var startQuiz = document.querySelector("#startquiz");
var submitScore = document.querySelector("#submitscore");
var goBack = document.querySelector("#goback");
var clearScores = document.querySelector("#clearscores");
var timeLeft = document.querySelector("#timeleft");
var correct = document.querySelectorAll(".correct");
var wrong = document.querySelectorAll(".wrong");
var answerOne = document.querySelectorAll(".answer1");
var answerTwo = document.querySelectorAll(".answer2");
var answerThree = document.querySelectorAll(".answer3");
var answerFour = document.querySelectorAll(".answer4");
var answerFive = document.querySelectorAll(".answer5");
var onQuestOne = false;
var onQuestTwo = false;
var onQuestThree = false;
var onQuestFour = false;
var onQuestFive = false;
var TestComplete = false;
var showFor = 0

// console.log(answerOne);
// console.log(answerTwo);
// console.log(answerThree);
// console.log(answerFour);
// console.log(answerFive);
// console.log(correct);
// console.log(wrong);

function addListernContain (button, container) {
    for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", container);
    }
}

// Shows the user if the correct answer has been selected
function chkCorrect() {
    clearInterval(checkInterval)
    showFor = 2
    var ansIs = "Correct!!"
    ansChk.textContent = ansIs
    ansChk.setAttribute("style", "display:block;")
    console.log(ansIs)

    var checkInterval = setInterval(function() {
        showFor--;

        if (showFor === 0) {
            ansChk.setAttribute("style", "display:none;")
            ansChk.textContent = ""
            clearInterval(checkInterval);
        }
    }, 1000)
}

// Show user if the wrong answer has been selected
function chkWrong() {
    clearInterval(checkInterval)
    showFor = 2
    var ansIs = "Wrong!!"
    ansChk.textContent = ansIs
    ansChk.setAttribute("style", "display:block;")
    timer += -20
    console.log(ansIs)

    var checkInterval = setInterval(function() {
        showFor--;

        if (showFor === 0) {
            ansChk.setAttribute("style", "display:none;")
            ansChk.textContent = ""
            clearInterval(checkInterval);
        }
    }, 1000)
}

function oneToTwo() {
    questOne.setAttribute("style", "display:none;");
    questTwo.setAttribute("style", "display:block;");
}

function twoToThree() {
    questTwo.setAttribute("style", "display:none;");
    questThree.setAttribute("style", "display:block;");
}

function threeToFour() {
    questThree.setAttribute("style", "display:none;");
    questFour.setAttribute("style", "display:block;");
}

function fourToFive () {
    questFour.setAttribute("style", "display:none;");
    questFive.setAttribute("style", "display:block;");
}

function fiveComplete() {
    questFive.setAttribute("style", "display:none;");
    allDone.setAttribute("style", "display:block;");
    TestComplete = true;
}

function quizOver() {
    questOne.setAttribute("style", "display:none;");
    questTwo.setAttribute("style", "display:none;");
    questThree.setAttribute("style", "display:none;");
    questFour.setAttribute("style", "display:none;");
    questFive.setAttribute("style", "display:none;");
    allDone.setAttribute("style", "display:block;");
}

// Show time left for quiz (shows 0 seconds before start of quiz)
var timer = 75;
timeLeft.append("Time left: " + timer)

// Function to run the quiz
function runQuiz() {

    TestComplete = false;
    intro.setAttribute("style", "display:none;");
    questOne.setAttribute("style", "display:block;");

    // Set time allowed for quiz to be taken
    // timer = 75;
    

    // Begin countdown
    var timeInterval = setInterval(function() {
        --timer;

        // Show Time Counting Down
        timeLeft.textContent = "Time left: " + timer;

        // Stop countdown when timer reaches 0.  Show Final Score
        if (timer === 0) {
            quizOver();
            clearInterval(timeInterval);
        }

        if (TestComplete === true) {
            clearInterval(timeInterval);
        }
    }, 1000)
}

startQuiz.addEventListener("click", runQuiz);

addListernContain(answerOne, oneToTwo);
addListernContain(answerTwo, twoToThree);
addListernContain(answerThree, threeToFour);
addListernContain(answerFour, fourToFive);
addListernContain(answerFive, fiveComplete);

for (var j = 0; j < correct.length; j++) {
    correct[j].addEventListener("click", chkCorrect);
};

for (var k = 0; k < wrong.length; k++) {
    wrong[k].addEventListener("click", chkWrong)
};
