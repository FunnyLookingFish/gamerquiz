/*

create variables for questions, answers, and buttons
add start button
add submit button
done -- add css styles
set questions
create timer
create question function
create score keeping
create highscore board and save it on local so it is persistent

*/

let questions = ["What does CSS stand for?", "What does HTML stand for?", "What is the CSS property used to control font-size in an element?", "JavaScript is considered what kind of language?", "What are the 'function' and 'var' known as?"]

let answersOne = [{a: 'Cascade style sheets'}, {a: 'HyperText Markup Language'}, {a: 'text-syle'}, {a: 'High-level'}, {a: 'Keywords'}]
let answerTwo = [{b: 'Cascading style sheets'}, {a: 'HyperText and links Markup Language'}, {b: 'text-size'}, {b: 'Object-Based'}, {b: 'Data types'}]
let answerThree = [{c: 'Color and style sheets'}, {c: 'HighText Machine Language'}, {c: 'font-size'}, {c: 'Object-Oriented'}, {c: 'Prototypes'}]
let answerFour = [{d: 'None of the above'}, {d: 'HighTech Mechanism Language'}, {d: 'None of the above'}, {d: 'Assembly-language'}, {d: 'Declaration statements'}]


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let score = 0;
let highscore = localStorage.getItem("highscore");

generateQuiz();

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if(--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function showQuestions(questions, quizContainer) {
    const output = [];
    const answers;
    for(var i = 0; i < question.length; i++){
        answers=[];
        for(letter in questions[i].answers){
            answers.push();
            }
    quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer) {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const userAnswer = '';
    const numCorrect = 0;
    for(var i = 0; i < questions.length; i++) {
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){
            numCorrect++;
            answerContainers[i].style.color = 'lightgreen';
        }else{
            answerContainers[i].style.color = 'red';
        }
    }
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

submitButton.click = function(){
    showResults(questions, quizContainer, resultsContainer);
}

if(highscore !== null){
    if(score > highscore) {
            localStorage.setItem("highscore", score);
        }
}else{
    localStorage.setItem("highscore", score);
}