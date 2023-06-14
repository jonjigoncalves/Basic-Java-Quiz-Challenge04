// // first goal is to connect start button
var startBtn = document.querySelector('#start-btn')
var quizwrap = document.querySelector('.quiz-wrap');
var scoresDiv = document.querySelector('footer.scores');



var score = 0;
var timeleft = 60;

startBtn.addEventListener('click', function () {
  startBtn.classList.add("hide");
  quizwrap.classList.remove('hide');
  document.getElementById('alert').classList.add('hide')
  startGame();
  setInterval(clockTick, 1000);

})
function clockTick() {
  timeleft--;
  if (timeleft < 0) {
    timeleft = 0;
    endGame();
  }
  document.getElementById('timer-el').innerText = timeleft

}
var currentQuestionIndex = 0
function startGame() {
  // show current question using the index
  showQuestion();

  // console.log('start!');
}
function showQuestion() {
  // console.log(questionData);
  // get the question object of the current one from the index(currentQuestionIndex) and store it to a variable
  if (currentQuestionIndex >= questionData.length) {
    
    return endGame();
  }
  
  
  var questionObj = questionData[currentQuestionIndex];
  console.log(questionObj);
  console.log(currentQuestionIndex);
  var questionOutputEl = document.getElementById('question-output');
  questionOutputEl.innerText = questionObj.question;
  var choicesOutputEl = document.querySelector('.choices');
  choicesOutputEl.innerHTML = "";
  // endGame();
  
  for (var index = 0; index < questionObj.options.length; index++) {
    var button = document.createElement('button');
    button.innerText = questionObj.options[index];
    button.setAttribute('value', questionObj.options[index])
    button.onclick = function () {
      if (this.value === questionObj.answer) {
        score += 100
        // var correct = questionObj.answer 
        // correct.style.backgroundColor = 'green';
        // choicesOutputEl.innerText = 'correct';
      
      
      }
      else {
        timeleft -= 10;
      
        // console.log(timeleft);
      }
      
      
      currentQuestionIndex++;
      showQuestion();
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
  // console.log(event.target);
  var initials = document.getElementById('initials').value
  // console.log(initials);

  results();

})



function getUserScores() {
  showQuestion();
  var rawData = localStorage.getItem('initials');
  var parsed = JSON.parse(rawData) || [];

  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed;
}

function saveUserData(arr) {
  var jsonVal = JSON.stringify(arr);

  localStorage.setItem('initials', jsonVal);
}


// document.getElementsByClassName('over').addEventListener('click', function(){
//   document.querySelector('.end').classList.add('hide');
// })

// issues with the div in end coming back after a few seconds, added a prevent default but it seems to just have delayed it, i suspect the endgame function is the issue as that is where the class hide is removed so the user can add there name before the score is displayed

function results() {
  // add .hide to the form so it will dissapear
  // var form = document.getElementById('initial-form');
  // form.classList.add('hide');

  

  // show scofres
  var scoresDiv = document.querySelector('footer.scores');
  scoresDiv.classList.remove('hide');

  

  // set the scores and initials into an object
  var initials = document.getElementById('initials').value;
  var userScore = {
    name: initials,
    score: score
  };

  var usersArray = getUserScores();
  usersArray.push(userScore);
  saveUserData(usersArray);

  showScores();

  var endDiv = document.querySelector('.end');
endDiv.classList.add('hide1');
// prevent 
// preventDefault();
}

  
   // create the elements and append them to those elements to show the scores.
function showScores() {
  var users = getUserScores();
  var scoresDiv = document.querySelector('footer.scores');
  scoresDiv.innerHTML = '';

  for (var i=0; i<users.length; i++){
  // for (var userObj of users) {
    var userObj = users[i];
    var div = document.createElement('div');

    div.classList.add('score');
    scoresDiv.appendChild(div);

    var h2 = document.createElement('h2');
    h2.innerText = 'Name: ' + userObj.name;
    div.append(h2);

    var p = document.createElement('p');
    p.innerText = 'Score: ' + userObj.score;
    div.append(p);


  }
  
}
showScores();


