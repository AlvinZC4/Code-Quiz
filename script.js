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
var initalsEntered = []
var allScores = [];
var initialsStored = JSON.parse(localStorage.getItem("initals"));
var scoresStored = JSON.parse(localStorage.getItem("score"));
var onQuestOne = false;
var onQuestTwo = false;
var onQuestThree = false;
var onQuestFour = false;
var onQuestFive = false;
var TestComplete = true;
var onHighScore = false;
var timer = 75;
var showFor = 0
var yourFinalScore = 0


// Function to reset the quiz
function clearQuiz() {
    onQuestOne = false
    onQuestTwo = false
    onQuestThree = false
    onQuestFour = false
    onQuestFive = false
    TestComplete = true
    onHighScore = false
    timer = 75
    console.log(timer)
    yourFinalScore = 0
      
}
// function to create event listeners for answer buttons
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

        if (onHighScore === true) {
            clearInterval(timeInterval)
        }
    }, 1000)
}

function renderHighScores () {
    scoreList.innerHTML = "";

    var userScores = JSON.parse(localStorage.getItem("score"))
    var userInitals = JSON.parse(localStorage.getItem("initals"))

    for (var l = 0; l < allScores.length; l++) {
        var listNum = l + 1
        userScores = allScores[l]
        userInitals = initalsEntered[l]
        console.log(userScores)
        console.log(userInitals)
        var li = document.createElement("li")
        li.setAttribute("class", "d-flex mx-auto")
        li.textContent = listNum + " - " + userInitals + " - " + userScores
        scoreList.appendChild(li)
    }
}


// Function to add users score to high score list
function addHighScore() {
    finalScore = yourFinalScore
    var thisUsersScore = yourFinalScore
    var initalValidation = document.querySelector("#yourinitals").value
    // Check that a valid entry was made for users initals
    if (initalValidation === "" || initalValidation.length > 3) {
        alert("Please enter your initals with no more than three characters")
    }
    else {
        var thisUsersInitals = document.querySelector("#yourinitals").value
        initalsEntered.push(thisUsersInitals)
        allScores.push(thisUsersScore)
        localStorage.setItem("initals", JSON.stringify(initalsEntered))
        localStorage.setItem("score", JSON.stringify(allScores))
        allDone.setAttribute("style", "display:none;")
        highScores.setAttribute("style", "display:block;")
        onHighScore = true;
        renderHighScores()
    }


    console.log(initalsEntered)
    console.log(allScores)
}

startQuiz.addEventListener("click", runQuiz);
submitScore.addEventListener("click", addHighScore);

goBack.addEventListener("click", function() {
    clearQuiz()
    intro.setAttribute("style", "display:block;");
    questOne.setAttribute("style", "display:none;");
    questTwo.setAttribute("style", "display:none;");
    questThree.setAttribute("style", "display:none;");
    questFour.setAttribute("style", "display:none;");
    questFive.setAttribute("style", "display:none;");
    allDone.setAttribute("style", "display:none;");
    highScores.setAttribute("style", "display:none")
})

viewScores.addEventListener("click", function () {
    onHighScore = true;
    intro.setAttribute("style", "display:none;");
    questOne.setAttribute("style", "display:none;");
    questTwo.setAttribute("style", "display:none;");
    questThree.setAttribute("style", "display:none;");
    questFour.setAttribute("style", "display:none;");
    questFive.setAttribute("style", "display:none;");
    allDone.setAttribute("style", "display:none;");
    highScores.setAttribute("style", "display:block;")
})

clearScores.addEventListener("click", function () {
    localStorage.clear()
    initalsEntered = []
    allScores = []
    renderHighScores()

})

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
