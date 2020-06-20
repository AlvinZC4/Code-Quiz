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
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var submitScore = document.querySelector("#submitscore");
var goBack = document.querySelector("#goback");
var clearScores = document.querySelector("#clearscores");
var timeLeft = document.querySelector("#timeleft");
// Shows the user if the correct answer has been selected
function chkCorrect() {
    var showFor = 1

    var checkInterval = setInterval(function() {
        ansChk.textContent = "Correct!!";
        showFor--;

        if (showFor === 0) {
            ansChk.textContent = "";
            clearInterval(checkInterval);
        }
    }, 1000)
}

// Show user if the wrong answer has been selected
function chkWrong() {
    var showFor = 1

    var checkInterval = setInterval(function() {
        ansChk.textContent = "Wrong!!";
        showFor--;

        if (showFor === 0) {
            ansChk.textContent = "";
            clearInterval(checkInterval);
        }
    }, 1000)
}

// Show time left for quiz (shows 0 seconds before start of quiz)
var timer = 0;
timeLeft.append("Time left: " + timer)

// Function to run the quiz
function runQuiz() {


    // Set time allowed for quiz to be taken
    timer = 75;
    

    // Begin countdown
    var timeInterval = setInterval(function() {
        timeLeft.textContent = "Time left: " + timer;

        console.log(timeLeft);
        timer--;

        if (timer === 0) {

            clearInterval(timeInterval);
        }
    }, 1000)
}

startQuiz.addEventListener("click", runQuiz);
