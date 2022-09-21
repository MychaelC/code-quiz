var startButton = document.querySelector("startButton");
var timerEl = document.querySelector("#Timer");

var questionEl = document.querySelector('#question');
var question1El = document.querySelector('#question1');
var question2El = document.querySelector('#question2');
var question3El = document.querySelector('#question3');
var question4El = document.querySelector('#question4');

var startEl = document.querySelector('#start');
var JavaQuizEl = document.querySelector('#JavaQuiz');

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
var playerScore;
var timeLeft = 60;
var questionIndex = 0;
var timeInt;

function startTime() {
    timeInt = setInterval(
        function () {
            timeLeft--;
            timerEl.textContent = 'Timer: ${timeLeft}';
            if (timeLeft === 0) {
                playerScore = 0;
                clearInterval(timeInt);
                timerEl.textContent = "";
                alert("Game Over!");
                playerScore = 0;
                enterHscore();
            }
        }, 100);
};

startButton.addEventListener("click", startQuiz);
function startQuiz() {
    playerScore = 0;
    startTimer();
    introEl.setAttribute("style", "display: none");
    JavaQuizEl.setAttribute("style", "display: block");
    loadQuestions();
};

function loadQuestions() {
    questionEl.textContent = questions[questionIndex].question;
    question1El.textContent = '${questions[questionIndex].q1}';
    question2El.textContent = '${questions[questionIndex].q2}';
    question3El.textContent = '${questions[questionIndex].q3}';
    question4El.textContent = '${questions[questionIndex].q4}';
};

var incorrectEL = document.querySelector("Incorrect");
JavaQuizEl.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches(".question1")) {
        var check = element.innerText;
        if (check === questions[questionIndex].answer) {
            timeLeft = timeLeft + 5;
            alert("Correct!");
            incorrectEl.textContent = "";

            var qlength = questions.length -1;
            if (questionIndex < qlength) {
                questionIndex++;
                loadQuestions();
            } else {
                alert("Complete!");
                playerScore = timeLeft;
                clearInterval(timeInt);
                timerEl.textContent = "";
                enterHscore ();
            }
        } else {
            timeLeft = timeLeft -10;
            incorrectEl.textContent = "Incorrect -10 seconds";
            if (timeLeft <= 0) {
                playerScore = 0;
                clearInterval(timeInt);
                timerEl.textContent = "";
                alert("Out of time!");
                enterHscore();
            }
        }
    }
});
