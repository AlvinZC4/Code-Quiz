// Setting global variables to objects in the DOM
var intro = document.querySelector("#intro");
var questOne = document.querySelector("#questone");
var questTwo = document.querySelector("#questtwo");
var questThree = document.querySelector("#questthree");
var questFour = document.querySelector("#questfour");
var questFive = document.querySelector("#questfive");
var allDone = document.querySelector("#alldone");
var finalScore = document.querySelector("#finalscore");
var yourInitals = document.querySelector("#yourinitals");
var highScores = document.querySelector("#highscores");
var ansChk = document.querySelector("#anschk");
var viewScores = document.querySelector("#viewscores");
var startQuiz = document.querySelector("#startquiz");
var scoreList = document.querySelector("#scorelist");
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
var initalsEntered = [];
var allScores = [];
var onQuestOne = false;
var onQuestTwo = false;
var onQuestThree = false;
var onQuestFour = false;
var onQuestFive = false;
var TestComplete = false;
var timer = 75;
var showFor = 0
var yourFinalScore = 0

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
    TestComplete = true;
}

function quizOver() {
    questOne.setAttribute("style", "display:none;");
    questTwo.setAttribute("style", "display:none;");
    questThree.setAttribute("style", "display:none;");
    questFour.setAttribute("style", "display:none;");
    questFive.setAttribute("style", "display:none;");
    allDone.setAttribute("style", "display:block;");
    finalScore = yourFinalScore
    var thisUsersScore = yourFinalScore
    allScores.push(thisUsersScore)
}

// Show time left for quiz (shows 0 seconds before start of quiz)
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

        // Stop countdown when timer reaches 0 (or below).  Show Final Score
        if (timer <= 0) {
            quizOver();
            clearInterval(timeInterval);
        }

        if (TestComplete === true) {
            clearInterval(timeInterval)
            yourFinalScore = timer
            quizOver();
        }
    }, 1000)
}

// Function to add users score to high score list
function addHighScore() {
    var initalValidation = document.querySelector("#yourinitals").value
    // Check that a valid entry was made for users initals
    if (initalValidation === "" || initalValidation.length > 3) {
        alert("Please enter your initals with no more than three characters")
    }
    else {
        var thisUsersInitals = document.querySelector("#yourinitals").value
        localStorage.setItem("initals", JSON.stringify(initalsEntered))
        localStorage.setItem("score", JSON.stringify(allScores))
        allDone.setAttribute("style", "display:none;")
        highScores.setAttribute("style", "display:block;")
    }
    initalsEntered.push(thisUsersInitals)

    console.log(initalsEntered)
    console.log(allScores)
}

startQuiz.addEventListener("click", runQuiz);
submitScore.addEventListener("click", addHighScore);

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
