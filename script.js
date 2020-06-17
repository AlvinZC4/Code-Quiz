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
function correct() {
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
function wrong() {
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
timeLeft = 0;
timeLeft.textContent = "Time left: " + timeLeft;

// Function to run the quiz
function runQuiz() {


    // Set time allowed for quiz to be taken
    timeLeft = 75;

    // Begin countdown
    var timeInterval = setInterval(function() {
        timeLeft.textContent = timeLeft;
        timeLeft--;

        // A for loop to cycle through the questions
        for (var i = 0; i < 7; i++) {

            if (i = 0) {
                // Hide introduction to quiz and show question 1
                intro.setAttribute("style", "display:none;");
                questOne.setAttribute("style", "display:block;");
            }
            else if (i = 1) {
                // Hide question 1 and show question 2
                questOne.setAttribute("style", "display:none;");
                questTwo.setAttribute("style", "display:block;");
            }
            else if (i = 2) {
                // Hide question 2 and show question 3
                questTwo.setAttribute("style", "display:none;");
                questThree.setAttribute("style", "display:block;");
            }
            else if (i = 3) {
                // Hide question 3 and show question 4
                questThree.setAttribute("style", "display:none;");
                questFour.setAttribute("style", "display:block;");
            }
            else if (i = 4) {
                // Hide question 4 and show question 5
                questFour.setAttribute("style", "display:none;");
                questFive.setAttribute("style", "display:block;");
            }
            else if (i = 5) {
                // Hide question 5 and show All Done
                questFive.setAttribute("style", "display:none;");
                allDone.setAttribute("style", "display:block;");
                clearInterval(timeInterval);
            }
            else {
                // Hide All Done and show View High Scores
                allDone.setAttribute("style", "display:none;");
                viewScores.setAttribute("style", "display:block;");
            }

            
        }

    })
}