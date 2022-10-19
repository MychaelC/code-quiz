//Variables
var startButton = document.querySelector("#startButton");
var timerEl = document.querySelector("#timer");
var introEl = document.querySelector("#intro");

var questionEl = document.querySelector('#question');
var question1El = document.querySelector('#question1');
var question2El = document.querySelector('#question2');
var question3El = document.querySelector('#question3');
var question4El = document.querySelector('#question4');

var incorrectEL = document.querySelector('#incorrect');

var startEl = document.querySelector('#start');
var javaQuizEl = document.querySelector('#javaQuiz');

//Questions and Ans
var questions = [
    {
        question:"What is JavaScript abreviated as?",
        a: "JA",
        b: "JV",
        c: "JT",
        d: "JS",
        answer: "JS"
    },
    {
        question: "What is JavaScript?",
        a: "Ancient writting",
        b: "Programming Language",
        c: "Cursive",
        d: "Computer",
        answer: "Programming Language"
    },
    {
        question: "When did JavaScript first appear?",
        a: "2022",
        b: "1922",
        c: "1995",
        d: "1000 BC",
        answer: "1995"
    },
    {
        question: "What is this test about?",
        a: "HTML",
        b: "Internet",
        c: "JavaScript",
        d: "CSS",
        answer: "JavaScript"
    },
    {
        question: "What percentage of websites use JavaScript?",
        a: "98%",
        b: "None",
        c: "2%",
        d: "50%",
        answer: "98%"
    }
];
//Game variables
var playerScore;
var secondsLeft = 60;
var questionIndex = 0;
var timeInt;
//Start Time
function startTimer() {
    timeInt = setInterval(
        function () {
            secondsLeft--;
            timerEl.textContent = `Timer: ${secondsLeft}`;
            if (secondsLeft === 0) {
                playerScore = 0;
                clearInterval(timeInt);
                timerEl.textContent = "";
                alert("Game Over!");
                playerScore = 0;
                enterScore();
            }
        }, 1000);
};
//Begin Java Quiz
startButton.addEventListener("click", startQuiz);
function startQuiz() {
    playerScore = 0;
    startTimer();
    introEl.setAttribute("style", "display: none");
    javaQuizEl.setAttribute("style", "display: block");
    loadQuestions();
};
// Starting questions
function loadQuestions() {
    questionEl.textContent = questions[questionIndex].question;
    question1El.textContent = questions[questionIndex].a;
    question2El.textContent = questions[questionIndex].b;
    question3El.textContent = questions[questionIndex].c;
    question4El.textContent = questions[questionIndex].d;
};
//Player answer choices
var incorrectEL = document.querySelector("#incorrect");
javaQuizEl.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".questionA")) {
        var check = element.innerText;
        if (check === questions[questionIndex].answer) {
            secondsLeft = secondsLeft + 5;
            alert("Correct!");
            incorrectEL.textContent = "";

            var qlength = questions.length -1;
            if (questionIndex < qlength) {
                questionIndex++;
                loadQuestions();
            } else {
                alert("Complete!");
                playerScore = secondsLeft;
                clearInterval(timeInt);
                timerEl.textContent = "";
                enterScore ();
            }
        } else {
            secondsLeft = secondsLeft -10;
            incorrectEL.textContent = "Incorrect -10 seconds";
            if (secondsLeft <= 0) {
                playerScore = 0;
                clearInterval(timeInt);
                timerEl.textContent = "";
                alert("Out of time!");
                enterScore();
            }
        }
    }
});
function enterScore () {
    var initials = prompt("Enter your initials");
    var obj =  {initials, score:secondsLeft};

    localStorage.setItem("Initials", JSON.stringify(obj))
    document.querySelector(".initials") .innerText= "Initials " + highScore.initials + "Score " + highScore.score
}
var highScore = JSON.parse(localStorage.getItem("Initials"))
document.querySelector(".initials") .innerText= "Initials " + highScore.initials + "Score " + highScore.score