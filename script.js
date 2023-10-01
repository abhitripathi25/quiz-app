const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
            
        ]
    },
    {
        question: "Which is the largest country in the world?",
        answers: [
            { text: "China", correct: true},
            { text: "India", correct: false},
            { text: "America", correct: false},
            { text: "Australia", correct: false},
            
        ]
    },
    {
        question: "Who is the Prime Minister of India?",
        answers: [
            { text: "Mamta Banerjee", correct: false},
            { text: "Rahul Gandhi", correct: false},
            { text: "Amit Shah", correct: false},
            { text: "Narendra Modi", correct: true},
            
        ]
    },
    {
        question: "Which is the biggest ocean in the world?",
        answers: [
            { text: "Pacific Ocean", correct: true},
            { text: "Antarctic Ocean", correct: false},
            { text: "Indian Ocean", correct: false},
            { text: "Atlantic Ocean", correct: false},
            
        ]
    }
];

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    
} 
 function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML =questionNo + ". " + 
    currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
 }
 showQuestion();