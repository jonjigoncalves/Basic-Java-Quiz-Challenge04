// // first goal is to connect start button
var startBtn = document.querySelector('#start-btn')
var quizwrap = document.querySelector('.quiz-wrap');
startBtn.addEventListener('click', function(){
startBtn.classList.add("hide");
quizwrap.classList.remove('hide');


})
// console.log(startBtn);
// // then addEventlistner
// startBtn.addEventListener('click',function(){
//    document.getElementById('start').classList.add('hide')
//    document.getElementById('quiz').classList.remove('hide')
// });
// add clickEvent


var startBtn = document.querySelector('#start-btn');
var currentQuestionIndex = 0
function ShowCurrentQuestion(){
  // get the question object of the current one from the index(currentQuestionIndex) and store it to a variable
  var currentQuestion = questionData[currentQuestionIndex];
  
}
function startGame(){
  // hide start button
startBtn.classList.add('hide');
// show current question using the index
ShowCurrentQuestion();f

console.log('start!');
}
startBtn.addEventListener('click', startGame);




var h2 = document.querySelector(`#question-display`);
var choicesdiv = document.querySelector(`.choices`);
var currentQuestionIndex = 0

for (var i=0; i<5; i++){
    var answerBtn = document.createElement('button');

    answerBt.innerText = questionData[currentQuestionIndex].choices[i];



}

h2.innerText = questionData[currentQuestionIndex].question