// Cкопіюй код з минулого уроку
document.addEventListener('DOMContentLoaded', () => {
const questionText = document.querySelector("#question-text");
const answersContainer = document.querySelector("#answers-container");

const startScreen = document.querySelector("#start-screen");
const quizScreen =  document.querySelector("#quiz-screen");
const resultScreen =  document.querySelector("#result-screen");
const startBtn =  document.querySelector("#start-btn");
const restartBtn =  document.querySelector("#restart-btn");

let questionIndex = 0;
let score = 0;
let interval;
 
    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "Який корінь з 1024",
            answers: ["12", "24", "26", "32"],
            correct: 3
        },
        
        //   Додай свої запитання 
           {
            question: "Який корінь з 441?",
            answers: ["12", "14", "21", "28"],
            correct: 2
        },
        
        
        
           {
            question: "Який корінь з 2025?",
            answers: ["45", "35", "25", "15"],
            correct: 0
        },
        
        
        
           {
            question: "Який корінь з 676?",
            answers: ["16", "26", "34", "38"],
            correct: 1
        },
        
        
         {
            question: "Який корінь з 961?",
            answers: ["30", "31", "34", "37"],
            correct: 1
        },
        
        {
            question: "Який корінь з 625?",
            answers: ["22", "32", "25", "35"],
            correct: 2
        },
        
        
          {
            question: "Який корінь з 576?",
            answers: ["24", "26", "32", "28"],
            correct: 0
        },
        
        
          {
            question: "Який корінь з 841?",
            answers: ["23", "29", "39", "41"],
            correct: 1
        },
        
        
          {
            question: "Який корінь з 1089?",
            answers: ["38", "37", "33", "27"],
            correct: 2
        },
        
        
        
           {
            question: "Який корінь з 5184?",
            answers: ["58", "64", "66", "72"],
            correct: 3
        },
        
        
        
        
        
    ];
    
    function startTimer() {
        let timeLeft = 30;
         document.querySelector("#timer").innerHTML = "Час: " + timeLeft
        interval = setInterval(function () {
            timeLeft--;
            document.querySelector("#timer").innerHTML = "Час: " + timeLeft
            if (timeLeft < 1) {
                nextQuestion()
            }
        }, 1000)
    }
    
    
    
    
    function showQuestion(question) {
        clearInterval(interval);
        startTimer();
        answersContainer.innerHTML = " ";
        questionText.innerHTML = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            let answerBtn = document.createElement("button");
            
            answerBtn.onclick = function () {checkAnswer(answerBtn, i)};
            
            answerBtn.innerHTML = question.answers[i];
            answerBtn.classList.add("answer-btn");
            answersContainer.append(answerBtn)
        }
    }
    
    
    showQuestion(questions[0]);
    
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else { showResult();}
    }
    
    
    function checkAnswer(button, answerIndex) {
        if (answerIndex == questions[questionIndex].correct) {
            score++;
            document.querySelector("#score-display").innerText = "Бали: "+ score;
            button.classList.add("correct");
        }  else {
            button.classList.add("wrong");
        }
        document.querySelectorAll(".answer-btn").forEach(function (b){
            b.disabled = true;
        })
        
        setTimeout(nextQuestion, 1000);
    }
    
    
function startGame() {
    startScreen.classList.add("hide");
    quizScreen.classList.remove("hide");
      resultScreen.classList.add("hide");
    score = 0;
    questionIndex = 0;
    showQuestion(questions[0]);
}
    
startBtn.onclick = startGame;
restartBtn.onclick = startGame;


function showResult() {
    quizScreen.classList.add("hide");
    resultScreen.classList.remove("hide");
    let accuracy = (score / questions.length) * 100;
    accuracy = Math.round(accuracy);
    document.querySelector("#result-text").innerText =
    `Твій результат: ${score} з ${questions.length} (${accuracy}%)`
}

















    
    
});
