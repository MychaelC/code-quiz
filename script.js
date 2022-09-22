//Variables
var startButton = document.querySelector("startButton");
var timerEl = document.querySelector("#Timer");

var questionEl = document.querySelector('#question');
var question1El = document.querySelector('#questionA');
var question2El = document.querySelector('#questionA');
var question3El = document.querySelector('#questionA');
var question4El = document.querySelector('#questionA');

var startEl = document.querySelector('#start');
var JavaQuizEl = document.querySelector('#JavaQuiz');

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
            timerEl.textContent = 'Timer: ${secondsLeft}';
            if (secondsLeft === 0) {
                playerScore = 0;
                clearInterval(timeInt);
                timerEl.textContent = "";
                alert("Game Over!");
                playerScore = 0;
                enterScore();
            }
        }, 100);
};
//Begin Java Quiz
startButton.addEventListener("click", startQuiz);
function startQuiz() {
    playerScore = 0;
    startTimer();
    introEl.setAttribute("style", "display: none");
    JavaQuizEl.setAttribute("style", "display: block");
    loadQuestions();
};
// Starting questions
function loadQuestions() {
    questionEl.textContent = questions[questionIndex].question;
    question1El.textContent = '${questions[questionIndex].q1}';
    question2El.textContent = '${questions[questionIndex].q2}';
    question3El.textContent = '${questions[questionIndex].q3}';
    question4El.textContent = '${questions[questionIndex].q4}';
};
//Player answer choices
var incorrectEL = document.querySelector("#incorrect");
JavaQuizEl.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".questionA")) {
        var check = element.innerText;
        if (check === questions[questionIndex].answer) {
            secondsLeft = secondsLeft + 5;
            alert("Correct!");
            incorrectEl.textContent = "";

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
            incorrectEl.textContent = "Incorrect -10 seconds";
            if (secondsLeft <= 0) {
                playerScore = 0;
                clearInterval(timeInt);
                timerEl.textContent = "";
                alert("Out of time!");
                enterHscore();
            }
        }
    }
});
