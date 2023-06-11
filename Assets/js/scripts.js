// // first goal is to connect start button
var startBtn = document.querySelector('#start-btn')
var quizwrap = document.querySelector('.quiz-wrap');

var score = 0;
var timeleft = 60;

startBtn.addEventListener('click', function () {
  startBtn.classList.add("hide");
  quizwrap.classList.remove('hide');
  startGame();
  setInterval(clockTick, 1000);
 
})
function clockTick() {
  timeleft--;
  if (timeleft < 0) {
    timeleft = 0;
  }
  document.getElementById('timer-el').innerText = timeleft

}
var currentQuestionIndex = 0
function startGame() {
  // hide start button

  // show current question using the index
  showQuestion();

  console.log('start!');
}
function showQuestion() {
  console.log(questionData);
  // get the question object of the current one from the index(currentQuestionIndex) and store it to a variable
  var questionObj = questionData[currentQuestionIndex];
  console.log(questionObj);
  var questionOutputEl = document.getElementById('question-output');
  questionOutputEl.innerText = questionObj.question;
  var choicesOutputEl = document.querySelector('.choices');
  choicesOutputEl.innerHTML = "";
  for (index = 0; index < questionObj.options.length; index++) {
    var button = document.createElement('button');
    button.innerText = questionObj.options[index];
    button.setAttribute('value', questionObj.options[index])
    button.onclick = function () {
      if (this.value === questionObj.answer) {
        score++
        console.log(score);
      }
      else {
        timeleft -= 10;
        console.log(timeleft);
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questionData.length) {
        showQuestion();
      }
      else {
        endGame();
      }

    }


    choicesOutputEl.append(button);


  }
}
function endGame() {
  document.getElementById('quiz-main').setAttribute('class', 'hide');
  document.querySelector('.end').classList.remove('hide');

 
}
  


document.getElementById('initial-form').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.target);
  var initials = document.getElementById('initials').value
  console.log(initials);
})
// startBtn.addEventListener('click', startGame);




